// The 3 AM Excuse
// The excuse a hardware wallet gives for refusing to sign
// a transaction at 3 AM.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "It's 3 AM. I don't sign transactions after midnight — even my private keys have a bedtime, and your judgement went to sleep hours ago.";

if (line.length > 200) {
  throw new Error(`entry is ${line.length} chars, over the 200 limit`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
