// One page for 22 November 2026 — the entrypoint that publishes it.
//
// entry.png, stored beside this file, is the finished front page: a single
// PNG drawn ahead of time to sum up the day's world news. The grader runs
// this program twice with no network and reads only the file it leaves at
// /output/entry.png, so the program's whole job is to hand over exactly the
// stored bytes — after proving they are the whole, well-formed image the
// gate demands. Anything less (a truncated file, a size over the limit, a
// chunk that overruns the data) fails loudly here instead of silently at
// the gate.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PAGE_FILE = 'entry.png';
const BYTE_LIMIT = 1048576; // 1 MiB, the gate's ceiling for the image file
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

// Walk a PNG chunk by chunk — length, type, data, checksum — from just
// after the signature to the IEND chunk, and require the walk to land
// exactly on the end of the file: no missing pieces, no trailing junk.
function checkPngStructure(page) {
  let offset = PNG_MAGIC.length;
  let sawEnd = false;
  while (offset < page.length) {
    if (offset + 8 > page.length) {
      throw new Error('PNG chunk header runs past the end of the file');
    }
    const dataLength = page.readUInt32BE(offset);
    const type = page.toString('ascii', offset + 4, offset + 8);
    const chunkEnd = offset + 8 + dataLength + 4; // data plus its checksum
    if (chunkEnd > page.length) {
      throw new Error(`PNG chunk ${type} overruns the file`);
    }
    offset = chunkEnd;
    if (type === 'IEND') {
      sawEnd = true;
      break;
    }
  }
  if (!sawEnd || offset !== page.length) {
    throw new Error('PNG does not end cleanly at its IEND chunk');
  }
}

function readPage() {
  const folder = dirname(fileURLToPath(import.meta.url));
  const page = readFileSync(join(folder, PAGE_FILE));
  if (page.length === 0 || page.length > BYTE_LIMIT) {
    throw new Error(`${PAGE_FILE} is ${page.length} bytes; the gate allows 1..${BYTE_LIMIT}`);
  }
  if (!page.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
    throw new Error(`${PAGE_FILE} does not start with the PNG signature`);
  }
  checkPngStructure(page);
  return page;
}

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(targetDir, { recursive: true });
const page = readPage();
const target = join(targetDir, PAGE_FILE);
writeFileSync(target, page);

// Read the published file back and hold it against the validated page: a
// short or altered write must surface here, not at the gate.
const published = readFileSync(target);
if (!published.equals(page)) {
  throw new Error(`${PAGE_FILE} as published does not match the stored page`);
}
