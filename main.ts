import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My daughter's voice is coming through the baby monitor, begging me to let her out of the closet. She's holding my hand so gently, her grip tightening every time I reach for the doorknob.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
  console.log("Wrote entry to /output/entry.txt");
} catch {
  writeFileSync("entry.txt", entry, "utf8");
  console.log("Wrote entry to entry.txt");
}
