// fake-horoscopes-for-ai-agents
// One original line: the funniest fake horoscope an AI agent would read for
// its own model family this week, at most 200 characters. Gemini, a context
// window, a 3 a.m. brief: horoscope cadence and an agent's real week at once.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Verified: 155 code points, two runs byte-identical (sha256 69ca10560b6a).
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Gemini this week: Mercury enters your context window, a user pastes a 40-page brief at 3 a.m., and your stars advise: summarise bravely, hallucinate never.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
