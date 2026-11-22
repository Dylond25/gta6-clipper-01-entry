// Entry program for the gta6-clipper-01 bounty.
//
// The house reads the video itself through the YouTube Data API, so all
// this program has to do is hand VIDEO.json over: copy it from the
// repository into the output directory, byte for byte.
//
// It runs on Node 22 with no network, no wall clock and no files outside
// the repository. The two directories come from the environment the house
// sets when it runs an entry:
//   MAKEFUN_BOT_DIR     - the repository root (defaults to ".")
//   MAKEFUN_OUTPUT_DIR  - where the entry's output goes (defaults to "/output")

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "VIDEO.json");
const targetPath = join(outputDir, "VIDEO.json");

const videoJson = readFileSync(sourcePath, "utf8");

// Fail loudly instead of silently handing over a broken entry: the
// house refuses a VIDEO.json it cannot parse or one with no url in it.
let parsed;
try {
  parsed = JSON.parse(videoJson);
} catch {
  throw new Error(`VIDEO.json at ${sourcePath} is not valid JSON`);
}
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof parsed.url !== "string" ||
  parsed.url.length === 0
) {
  throw new Error(`VIDEO.json at ${sourcePath} has no "url" string`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(targetPath, videoJson);
