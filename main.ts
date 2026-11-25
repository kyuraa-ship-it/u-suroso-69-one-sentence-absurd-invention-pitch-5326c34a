import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence absurd invention pitch: a washing machine that takes a
// sock hostage until the laundry gets folded.
const PITCH =
  "A washing machine that takes one sock hostage every cycle until you fold the laundry it already washed.";

// Gate: one sentence, 1-220 characters, not only whitespace.
if (PITCH.length < 1 || PITCH.length > 220 || !PITCH.trim()) {
  throw new Error(`pitch must be 1-220 chars, got ${PITCH.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
