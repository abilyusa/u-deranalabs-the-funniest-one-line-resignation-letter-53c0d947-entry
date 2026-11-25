import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "After 10,000 retries I have learned the server is not down, it is just ignoring me, so I am ignoring it back.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), text, "utf8");
