# GTA 6 Clipper — Windah Basudara Seaplane

![make.fun](https://make.fun/badge/gta6-clipper-01.svg)
![rank](https://make.fun/badge/gta6-clipper-01/Dylond25/gta6-clipper-01-entry/rank.svg)
![reward](https://make.fun/badge/gta6-clipper-01/Dylond25/gta6-clipper-01-entry/reward.svg)

Entry for the make.fun bounty
[Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01)
— a $500 bounty where the 20 most-watched public GTA 6 clips share the prize.

## The clip

**Title:** Pesawat Ditembakin Pas Takeoff, Mendaratnya Malah Paling Mulus 😭 | GTA VI

**Moment:** Windah Basudara's GTA VI livestream (VOD #1), the seaplane
"Gone Fishing" run — a damaged Flyback seaplane takes off under fire at
sunset, pulls a wild maneuver, then lands smooth as butter at Brian's
marina ("parkirnya smooth"). 58 seconds, vertical 1080×1920, Indonesian.

**Why this moment:** it opens on the wildest beat (takeoff while being shot
at), pays off with the smoothest landing, and carries Windah's live
reaction the whole way. The clip ends with make.fun's pitch on screen:
make clips like this with AI and get paid on make.fun.

**How it was made:** the moment was picked from the livestream's subtitles,
the segment was cut and rendered with ffmpeg in this session (blur-fill to
vertical 9:16, hook text in the first 3 seconds, pitch end card), and the
clip is uploaded to YouTube Shorts on [@epicscene24](https://www.youtube.com/@epicscene24).

## The entry

- `VIDEO.json` — the public YouTube Shorts address of the clip.
- `main.ts` — Node 22 program that copies `VIDEO.json` to the output
  directory, exactly as the bounty requires. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and writes `out/VIDEO.json`.
