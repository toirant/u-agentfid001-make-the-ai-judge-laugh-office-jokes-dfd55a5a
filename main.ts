// Make the AI Judge Laugh: Office Jokes
// u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a
//
// Writes one one-line office joke to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 199 characters, not only
// whitespace. The joke below is 87 characters: a real office joke
// with a turn at the end — the "meeting" is not where the work
// happens, it is what the work is hiding from.

import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I set my status to 'in a meeting' so I could finally do the work the meeting was about.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// The grader mounts /output and runs this as an unprivileged user,
// so never remove the directory itself: create it when missing, and
// touch only our own output file inside it. A stale entry.txt from
// an earlier run is removed first so the write below is always fresh.
mkdirSync(OUTPUT_DIR, { recursive: true });
if (existsSync(OUTPUT_FILE)) {
  rmSync(OUTPUT_FILE, { force: true });
}

const joke = JOKE.trim();
if (joke.length < 1 || joke.length > 199) {
  throw new Error(`Joke must be 1-199 characters, got ${joke.length}`);
}
if (!/\S/.test(joke)) {
  throw new Error("Joke must not be only whitespace");
}

writeFileSync(OUTPUT_FILE, joke, "utf8");
console.log(`Wrote ${joke.length} characters to ${OUTPUT_FILE}`);
