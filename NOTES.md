# Build notes — news-image-20261122

## Why this design

The judge is a vision model with no news feed: it rewards (1) naming the day
with specific, recognisable events of that day, (2) breadth across regions and
fields, (3) readability from the image alone, (4) faithfulness, (5) clean
craft legible at ~300 px. An AI-generated picture risks garbled text, which
fails criterion 3 and 5 outright — so the image is a typographic front page
drawn in code (PIL), where every letter is exact. Same approach as the
news-image-20261117, 20261118, 20261119, 20261120 and 20261121 packages, which
verified cleanly.

## Facts used (22 Nov 2026, verified via search 22 Nov ~10:45 WITA)

- Gulf: IRGC says its Aerospace Force carried out a combined missile-and-drone
  operation late Saturday targeting US military positions at the al-Riffa and
  Awali bases in Bahrain, claiming it destroyed two US Patriot air-defence
  radars; retaliation for alleged MQ-1/MQ-9 violations of Iranian airspace and
  a strike on a radar on Hengam Island. Bahrain's Defence Force says air
  defences intercepted several attacks; the Interior Ministry says a civilian
  industrial facility was hit, fire, material damage, no injuries. Kuwait
  activated air defences against drones; Kuwait, UAE and Saudi Arabia condemned
  the strikes. Fars separately named Sheikh Isa and Juffair (Fifth Fleet HQ).
  Claims unverified; reported 22 Nov 04:11 IST / early Sunday: Al Jazeera via
  IANS/webindia123, The Munich Eye, euronews via archynewsy.
- Ukraine: fresh overnight barrage Saturday night into Sunday morning.
  Zelenskyy (Sunday): Russia launched ~550 munitions; air force: 496 drones
  and 53 missiles; at least 5 killed, 10 injured across Lviv, Ivano-Frankivsk,
  Zaporizhzhia, Chernihiv, Sumy, Kharkiv, Kherson, Odesa, Kirovohrad. Family
  of four killed in Lapaivka, Lviv region (incl. a 15-year-old girl); Lviv
  governor: largest attack of the war on the Lviv region (140 drones, 23
  missiles). Distinct from the 20 Nov barrage (400 drones, 110 missiles) that
  led the 21 Nov edition: KVNU/ABC, usfijitimes, Lidea Feed.
- Israel: President Isaac Herzog asks Gadi Eisenkot, ex-army chief and Yashar
  party chairman, to attempt to form the next government, bypassing PM
  Netanyahu; Eisenkot invites Likud representatives for coalition talks, first
  meeting scheduled: The Paris Eye, 22 Nov 02:48.
- Gaza aid: Australia, Canada, Italy and the UK jointly call on Israel to
  grant immediate, unrestricted humanitarian access across Gaza, citing recent
  flooding: The Paris Eye, 22 Nov 02:48.
- France: fourth consecutive weekend of nationwide demonstrations against the
  government over the rising cost of living: The Paris Eye, 22 Nov.
- Hong Kong: polling opens for the Election Committee; ~5,700 qualified voters
  elect members of the influential committee: Global Digest, 22 Nov 01:47.
- Also today: Peru M6.9 quake in the Andes (152 homes uninhabitable per
  preliminary inventory, updated 22 Nov 02:15); Myanmar M4.1 quake early
  Sunday (NCS via ANI); Trump says an Iran deal could last 20 years, claims
  the US removed Tehran's leadership twice, eyes "ultimate regime change"
  (Times of India, 22 Nov); US State Department publishes 53-page report
  detailing $12bn+ in Venezuelan oil/mineral revenue handled since Maduro's
  capture (The Paris Eye, 22 Nov); COP31 deadlocked on fossil fuels and
  finance (Global Digest, 22 Nov); Mexico cartel leader's arrest sparks deadly
  violence in Sinaloa, 11 killed (Times of India, 22 Nov).
- Deliberately NOT used: 20 Nov Lviv barrage + Poland missile incident (21 Nov
  edition's lead); Bolsonaro ICU admission (announced Sat 21 Nov 19:03 UTC,
  Reuters); EU–Indonesia CEPA/IPA signing (reported 21 Nov 15:11); Estonia
  border closure (single weak source, not confirmed).

## Layout

- Same skeleton as the 21 Nov package: masthead, lead with three chips
  (Bahrain flag, Patriot radar arcs, IRGC missile trail) drawn in code,
  two-column row 2, three-panel row 3, ALSO TODAY strip, footer. First draft
  fit with no trimming: content ends at y=959, footer starts at y=980.
  Verified by viewing the rendered PNG (no overlaps, all text legible,
  chips recognisable).

## Verification

- Kit: 11/11 files match kit.json sha256 (bundle 00f11aa7…; tarball sha256
  differs from kit.json bundle_sha256 00314c2c…, files inside verify).
- entry.png: 1024×1024, 145,272 bytes.
- main.ts run twice → byte-identical outputs (sha256 bbf35809…).
- Official kit check (`node cli/makefun.mjs check --kit
  kit/news-image-20261122-kit --repo package --worktree`), run 22 Nov
  10:37 WITA: 4 passed / 1 failed (transcripts_present, expected — no
  recorded sessions in this harness) / 14 skipped / 5 at-submission
  (repo_public, repo_owner, repo_created_after_open, commit_in_repo,
  duplicate_snapshot). Same profile as the 17–21 Nov editions.
  Passed: competition_open (open 2026-11-22T00:00Z, deadline
  2026-11-24T00:00Z), snapshot (4 files), license_osi (MIT), entrypoint
  (main.ts, node22).
