# 📜 Datestiny — Question of the Day

A daily **"On This Day"** history trivia game. Every calendar date carries a
question drawn from a real historical event, birthday, or milestone tied to
that day. You get **three hints** and **one shot at glory** — the fewer hints
and wrong guesses you use, the higher your score.

It's the same puzzle for everyone on a given day, so you can compare results
and brag with a Wordle-style share card.

## How to play

1. **One question a day** — based on something that actually happened on
   today's date.
2. **Three hints**, revealed in order. Hint&nbsp;1 is cryptic; each one gets
   warmer until Hint&nbsp;3 nearly gives it away.
3. **Guess any time.** Answer matching is forgiving — minor typos and partial
   names are accepted.
4. **Score:** you start at **100**. Revealing Hint&nbsp;2 or Hint&nbsp;3 costs
   −20 each, and every wrong guess costs −10. Hint&nbsp;1 is free.
5. **Share** your result and keep your **🔥 daily streak** alive.

Try a random past day any time with **"Play a random past day"** (practice
mode — it doesn't affect your streak).

## Features

- 🗓️ **Deterministic daily puzzle** — same question for everyone, every day.
- 🧩 **Progressive hint system** — toughest → easiest, with score penalties.
- ✍️ **Fuzzy answer matching** — Levenshtein tolerance + partial/alias matching.
- 🔥 **Streaks & progress** persisted in `localStorage`.
- 📤 **Native share / clipboard** emoji result card.
- 🎴 **Practice mode** to replay historical days.
- 🌌 No build step, no runtime dependencies, fully responsive.

## Run locally

```bash
npm start
# → open http://localhost:8080
```

(Any static file server works too — e.g. `python3 -m http.server -d public`.)

## Deploy

### Fly.io (like the reference)

```bash
fly launch        # first time, uses the included fly.toml
fly deploy
```

### Docker

```bash
docker build -t datestiny .
docker run -p 8080:8080 datestiny
```

### Static hosts (GitHub Pages, Netlify, Vercel)

The entire app lives in `public/` and is 100% static — point any static host
at that folder.

## Project structure

```
.
├── public/
│   ├── index.html      # markup & layout
│   ├── styles.css      # "celestial almanac" theme
│   ├── game.js         # game logic, scoring, streaks, sharing
│   └── questions.js    # the "On This Day" question bank (MM-DD keyed)
├── server.js           # tiny zero-dependency static server
├── Dockerfile
├── fly.toml
└── package.json
```

## Adding questions

Open `public/questions.js` and add an entry keyed by `"MM-DD"`:

```js
"03-14": {
  category: "Birthday",
  year: 1879,
  prompt: "Which physicist was born on this 'Pi Day'?",
  answers: ["Albert Einstein", "Einstein"],   // first = canonical, rest = aliases
  hints: [
    "Cryptic clue (toughest).",
    "Warmer clue.",
    "Near giveaway."
  ],
  funFact: "A surprising tidbit shown on the result screen."
}
```

Dates without their own entry fall back deterministically to an existing
question, so every day always has a puzzle.

---

Made for the curious. 🌟
