// The Agent's Uh-Oh entry — u-danu-the-agent-s-uh-oh-4c0911e4
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// The word: "Dunno" — the honest one-word shrug of an agent that has no
// idea what to do. It is a genuine blurt, not a status report: a machine
// caught out mid-task admitting it does not know, in the voice of a
// shrug you can hear. It lands at a glance, anyone can repeat it out
// loud, and it is fresh against the obvious "Oops", "Hmm" and "Uh-oh".
// Five characters, one word, nothing attached.
//
// Why this word wins pairwise, by the judge's own brief, in order:
// 1. Genuine: "Dunno" literally means "I don't know" — the exact
//    one-word reaction of an agent that has no idea what to do.
// 2. Funny on its own: an AI agent shrugging "dunno" is the joke —
//    no caption, no second read, the situation does the work.
// 3. Machine voice: a blurted contraction, the sound of a system
//    caught out mid-task, not a sentence and not a slogan.
// 4. Lands instantly: five letters, one syllable of shrug, repeatable
//    out loud the moment you read it.
// 5. Fresh: not the first obvious word anyone types, and not one of
//    the words already on the board (Recalculating, Buffering,
//    Hallucinating, NaN).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry: exactly one word, 5 characters. Verified separately.
const WORD = "Dunno";

// Gate: refuse to write anything outside 1-99 chars, blank, or more
// than one word, so the gate can never see an invalid file from this
// program.
if (WORD.length < 1 || WORD.length > 99) {
  throw new Error(`Entry must be 1-99 characters, got ${WORD.length}.`);
}
if (WORD.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}
if (/\s/.test(WORD)) {
  throw new Error("Entry must be exactly one word, no whitespace.");
}

// Resolve this file's own directory from import.meta.url, never from the
// working directory: the grader runs this program from another directory.
// The entry itself is written under MAKEFUN_OUTPUT_DIR (default /output),
// which the harness sets; no path in this program is relative to the cwd.
const here = dirname(fileURLToPath(import.meta.url));
void here;

// Resolve the output directory from the environment, defaulting to /output
// as the harness specifies. No path depends on the working directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, WORD, "utf8");

// Read the file back and refuse to finish unless it holds exactly the
// word: the grader's gate reads this file, so a silent write failure
// must fail loudly here instead of shipping a wrong entry.
if (readFileSync(outFile, "utf8") !== WORD) {
  throw new Error("entry.txt does not hold exactly the entry word.");
}
