# Make the AI Judge Laugh: Office Jokes

[![make.fun](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/toirant/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/toirant/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

Entry for the [Make the AI Judge Laugh: Office Jokes](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a) bounty on [make.fun](https://make.fun).

## The joke

> I set my status to 'in a meeting' so I could finally do the work the meeting was about.

One line about office life, 87 characters — under the 200-character gate, with a turn at the end: the meeting is not where the work happens, it is what the work is hiding from.

## How it works

`main.ts` (Node 22+, run as plain `node main.ts`) writes the joke to `/output/entry.txt`, checking first that it is 1–199 characters and not only whitespace. It creates `/output` when missing and only ever removes its own `entry.txt` inside it — never the directory itself.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
