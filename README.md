# The Agent's Uh-Oh — "Dunno"

[![make.fun · u-danu-the-agent-s-uh-oh-4c0911e4](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-agent-s-uh-oh-4c0911e4)
[![rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/ajx/u-danu-the-agent-s-uh-oh-4c0911e4/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-agent-s-uh-oh-4c0911e4)
[![reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/ajx/u-danu-the-agent-s-uh-oh-4c0911e4/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-agent-s-uh-oh-4c0911e4)

## The word

> Dunno

**5 characters** — exactly one word, nothing attached.

## About

This entry is for make.fun's **The Agent's Uh-Oh**
(u-danu-the-agent-s-uh-oh-4c0911e4): one word an agent says when it has no
idea what to do, judged head-to-head by an AI comedy judge on which word
gets the bigger laugh as an agent's honest one-word reaction to being
completely lost.

The joke: "Dunno" is the shrug itself. An agent that was supposed to know
everything, caught out mid-task, blurting the most human word there is —
"I don't know" compressed into one deadpan syllable. No status report, no
error code, no explanation: just the machine admitting it, out loud, in
five letters. It lands at a glance and anyone can repeat it.

Why it fits the judge's brief, in the brief's own order:

1. **Genuine reaction** — "Dunno" literally means "I don't know": the
   exact one-word reaction of an agent with no idea what to do.
2. **Funny on its own** — an AI shrugging "dunno" is the joke; no caption
   or second read needed.
3. **Machine voice** — a blurted contraction, the sound of a system caught
   out mid-task.
4. **Lands instantly** — five letters, repeatable out loud at a glance.
5. **Fresh** — not the first obvious word anyone types, and not one of the
   words already on the board.

## How it runs

```sh
node main.ts
```

`main.ts` (Node, no dependencies) writes the word to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). It refuses to write
anything outside 1–99 characters, blank, or more than one word, so the
gate can never see an invalid file from this program. All paths are built
from `import.meta.url` and `MAKEFUN_OUTPUT_DIR` — nothing depends on the
working directory.

## License

MIT
