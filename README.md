[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/kanzaa28/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/kanzaa28/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

# news-image-20261122 — "The World in One Page"

**Practice-only entry.** `handed_over_places` is "none", so an entry built in
this harness is ranked but cannot take a paid place. A real submission still
needs the user's public GitHub repo (created after 22 Nov 00:00 UTC) +
transcript bundle from recorded sessions + the user's go-ahead.

## What it is

A one-page newspaper front page summing up **Sunday 22 November 2026**,
drawn programmatically with PIL (real text — no AI-image garbling, legible at
~300 px):

- **Lead:** Iran strikes US bases in Bahrain — the Revolutionary Guard says
  its missiles and drones hit two US Patriot radars at the al-Riffa and Awali
  bases, in retaliation for US drone flights over Iran. Bahrain says a
  civilian industrial site was hit instead (fire, material damage, no
  injuries); Kuwait activates its air defences against drones. The radar
  claims are unverified.
- **Ukraine:** Fresh overnight barrage — about 550 munitions (496 drones, 53
  missiles), at least 5 killed, 10 injured. A family of four dies in
  Lapaivka, in the Lviv region — its largest attack of the war.
- **Israel:** President Herzog asks ex-army chief Gadi Eisenkot to try to form
  the next government, bypassing Netanyahu; Eisenkot invites Likud to
  coalition talks.
- **Gaza aid:** Australia, Canada, Italy and the UK jointly call on Israel to
  let aid reach flooded Gaza without restriction.
- **France:** Nationwide cost-of-living protests enter a fourth weekend.
- **Hong Kong:** Voting begins as about 5,700 voters elect the Election
  Committee.
- **Also today:** Peru quake M6.9 in the Andes; Myanmar quake M4.1; Trump says
  an Iran deal could last 20 years; US details $12bn Venezuela oil revenue;
  COP31 deadlocked on fossil fuels; Sinaloa violence kills 11.

Facts checked against Reuters, AP, Al Jazeera, euronews and The Independent
(via search) on the morning of 22 Nov. The Iran/Bahrain strikes and the
Ukraine overnight barrage both happened late Saturday into Sunday morning and
were first reported on 22 Nov. Deliberately NOT used: the 20 Nov Lviv barrage
and Poland missile incident (already the 21 Nov edition's lead), the
Bolsonaro ICU admission (announced 21 Nov), the EU–Indonesia trade deal
(signed 21 Nov).

## Measured results

- Kit: 11/11 files match kit.json sha256 (bundle 00f11aa7…; note the
  downloaded tarball's own sha256 differs from kit.json's bundle_sha256
  00314c2c… — the files inside verify, as in prior editions).
- entry.png: 1024×1024, 145,272 bytes.
- main.ts run twice → byte-identical outputs (sha256 bbf35809…).
- Official kit check (`node cli/makefun.mjs check --kit
  kit/news-image-20261122-kit --repo package --worktree`): 4 passed / 1
  failed (transcripts_present, expected — no recorded sessions in this
  harness) / 14 skipped / 5 at-submission. Same profile as the 17–21 Nov
  editions. Passed: competition_open, snapshot (4 files), license_osi (MIT),
  entrypoint (main.ts, node22). No local scorer (server-graded).

## Payout

50 places share $100 (1st $20, 2nd $12, 3rd $6, 4th–10th $2, 11th–50th
$1.20). Closes 24 Nov 08:00 WITA.
