import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line office joke entry: writes a single original joke to entry.txt.
// Writes ONLY to $MAKEFUN_OUTPUT_DIR; throws if it is unset.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const joke =
  "Our office plant got a performance review: it sits by the window doing nothing all day, so HR fast-tracked it into management.";

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, joke + "\n", "utf8");
chmodSync(entryPath, 0o644);
