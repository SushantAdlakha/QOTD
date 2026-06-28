/* Datestiny — daily "On This Day" history trivia. */
(function () {
  "use strict";

  // ---- Scoring constants ----
  var BASE_SCORE = 100;
  var HINT_COST = [0, 20, 20];   // cost to reveal hint 1, 2, 3
  var WRONG_GUESS_COST = 10;

  // ---- State ----
  var state = {
    key: null,        // "MM-DD" puzzle key
    dateObj: null,
    question: null,
    hintsRevealed: 0,
    wrongGuesses: 0,
    solved: false,
    failed: false,
    finished: false,
    practice: false   // true when replaying a random past day
  };

  // ---- DOM ----
  var $ = function (id) { return document.getElementById(id); };
  var els = {
    dateBadge: $("dateBadge"),
    categoryBadge: $("categoryBadge"),
    question: $("questionText"),
    lede: $("lede"),
    hints: $("hints"),
    guessForm: $("guessForm"),
    guessInput: $("guessInput"),
    guessBtn: $("guessBtn"),
    feedback: $("feedback"),
    scoreNum: $("scoreNum"),
    triesDots: $("triesDots"),
    triesText: $("triesText"),
    giveUpBtn: $("giveUpBtn"),
    gameCard: $("gameCard"),
    resultCard: $("resultCard"),
    resultEmoji: $("resultEmoji"),
    resultTitle: $("resultTitle"),
    resultAnswer: $("resultAnswer"),
    bigScore: $("bigScore"),
    starsRating: $("starsRating"),
    funFact: $("funFact"),
    shareBtn: $("shareBtn"),
    practiceBtn: $("practiceBtn"),
    streakValue: $("streakValue"),
    countdown: $("countdown"),
    toast: $("toast"),
    howToBtn: $("howToBtn"),
    howToModal: $("howToModal"),
    modalClose: $("modalClose"),
    gotItBtn: $("gotItBtn")
  };

  var MONTHS = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

  // ======================================================================
  // Helpers
  // ======================================================================

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function keyFromDate(d) { return pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }

  function prettyDate(d) { return MONTHS[d.getMonth()] + " " + d.getDate(); }

  // Pick the puzzle for a given "MM-DD". If that date has no question,
  // deterministically fall back to one of the available questions so every
  // day still has a puzzle.
  function pickQuestion(key) {
    var bank = window.QUESTIONS || {};
    if (bank[key]) return { key: key, q: bank[key], exact: true };

    var keys = Object.keys(bank).sort();
    if (!keys.length) return null;
    // deterministic index from the date digits
    var seed = parseInt(key.replace("-", ""), 10);
    var chosen = keys[seed % keys.length];
    return { key: chosen, q: bank[chosen], exact: false };
  }

  // Normalize a guess/answer for fuzzy comparison.
  function normalize(s) {
    return (s || "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9 ]/g, " ")     // drop punctuation
      .replace(/\b(the|a|an|of|on|in)\b/g, " ") // drop filler words
      .replace(/\s+/g, " ")
      .trim();
  }

  // Levenshtein distance, capped for performance.
  function editDistance(a, b) {
    var m = a.length, n = b.length;
    if (Math.abs(m - n) > 3) return 99;
    var prev = [], cur = [], i, j;
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur[0] = i;
      for (j = 1; j <= n; j++) {
        var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      }
      for (j = 0; j <= n; j++) prev[j] = cur[j];
    }
    return prev[n];
  }

  // Returns "right" | "close" | "wrong"
  function checkGuess(guess, answers) {
    var g = normalize(guess);
    if (!g) return "wrong";
    var i, ans, tolerance;
    for (i = 0; i < answers.length; i++) {
      ans = normalize(answers[i]);
      if (!ans) continue;
      if (g === ans) return "right";
      // allow small typos proportional to answer length
      tolerance = ans.length > 12 ? 3 : (ans.length > 6 ? 2 : 1);
      if (editDistance(g, ans) <= tolerance) return "right";
      // partial: guess contains the key surname/word, or vice-versa
      if (ans.length >= 5 && (g.indexOf(ans) !== -1 || ans.indexOf(g) !== -1)) return "right";
    }
    // "close" if it shares a significant word with any answer
    var gWords = g.split(" ");
    for (i = 0; i < answers.length; i++) {
      var aWords = normalize(answers[i]).split(" ");
      for (var k = 0; k < aWords.length; k++) {
        if (aWords[k].length >= 4 && gWords.indexOf(aWords[k]) !== -1) return "close";
      }
    }
    return "wrong";
  }

  function currentScore() {
    var s = BASE_SCORE;
    for (var i = 0; i < state.hintsRevealed; i++) s -= HINT_COST[i];
    s -= state.wrongGuesses * WRONG_GUESS_COST;
    return Math.max(0, s);
  }

  function starsFor(score) {
    if (score >= 90) return "⭐️⭐️⭐️⭐️⭐️";
    if (score >= 70) return "⭐️⭐️⭐️⭐️";
    if (score >= 50) return "⭐️⭐️⭐️";
    if (score >= 30) return "⭐️⭐️";
    if (score > 0)   return "⭐️";
    return "☆";
  }

  // ======================================================================
  // Persistence (localStorage)
  // ======================================================================
  var LS_PROGRESS = "datestiny.progress.";   // + key
  var LS_STREAK = "datestiny.streak";
  var LS_LASTPLAYED = "datestiny.lastPlayed";

  function saveProgress() {
    if (state.practice) return;
    try {
      localStorage.setItem(LS_PROGRESS + state.key, JSON.stringify({
        hintsRevealed: state.hintsRevealed,
        wrongGuesses: state.wrongGuesses,
        solved: state.solved,
        failed: state.failed,
        finished: state.finished
      }));
    } catch (e) {}
  }

  function loadProgress(key) {
    try {
      var raw = localStorage.getItem(LS_PROGRESS + key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function getStreak() {
    try { return parseInt(localStorage.getItem(LS_STREAK), 10) || 0; }
    catch (e) { return 0; }
  }

  // Update streak when a daily puzzle is finished. Streak increments if the
  // previous play was "yesterday", resets if a day was skipped.
  function bumpStreak(todayKey) {
    if (state.practice) return getStreak();
    try {
      var last = localStorage.getItem(LS_LASTPLAYED);
      if (last === todayKey) return getStreak(); // already counted today
      var streak = getStreak();
      // crude "consecutive day" check using the actual date
      var y = new Date(state.dateObj.getTime() - 86400000);
      var yKey = keyFromDate(y) + ":" + y.getFullYear();
      streak = (last === yKey) ? streak + 1 : 1;
      localStorage.setItem(LS_STREAK, String(streak));
      localStorage.setItem(LS_LASTPLAYED, todayKey);
      return streak;
    } catch (e) { return getStreak(); }
  }

  // ======================================================================
  // Rendering
  // ======================================================================

  function renderHints() {
    var boxes = els.hints.querySelectorAll(".hint-box");
    boxes.forEach(function (box) {
      var idx = parseInt(box.getAttribute("data-index"), 10);
      box.classList.remove("locked", "revealed");
      if (idx < state.hintsRevealed) {
        box.classList.add("revealed");
        box.innerHTML =
          '<div class="hint-face">' +
          '<span class="hint-label">Hint ' + (idx + 1) + '</span>' +
          '<span class="hint-text">' + escapeHtml(state.question.hints[idx]) + '</span>' +
          '</div>';
      } else if (idx === state.hintsRevealed && !state.finished) {
        // next available hint
        box.innerHTML = hintFace(idx);
      } else {
        if (!state.finished) box.classList.add("locked");
        box.innerHTML = hintFace(idx);
      }
    });
  }

  function hintFace(idx) {
    var subs = ["Cryptic · −0 pts", "Warmer · −20 pts", "Giveaway · −20 pts"];
    return '<div class="hint-face">' +
      '<span class="hint-label">Hint ' + (idx + 1) + '</span>' +
      '<span class="hint-sub">' + subs[idx] + '</span>' +
      '</div>';
  }

  function renderScore() {
    els.scoreNum.textContent = currentScore();
  }

  function renderTries() {
    var dots = "";
    var total = Math.max(state.wrongGuesses, 0);
    for (var i = 0; i < total; i++) dots += '<span class="try-dot miss"></span>';
    els.triesDots.innerHTML = dots;
    if (state.wrongGuesses === 0) {
      els.triesText.textContent = "No misses";
    } else {
      els.triesText.textContent = state.wrongGuesses + (state.wrongGuesses === 1 ? " miss" : " misses");
    }
  }

  function escapeHtml(s) {
    return (s || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function setFeedback(text, cls) {
    els.feedback.textContent = text;
    els.feedback.className = "feedback" + (cls ? " " + cls : "");
  }

  // ======================================================================
  // Game actions
  // ======================================================================

  function revealHint(idx) {
    if (state.finished) return;
    if (idx !== state.hintsRevealed) return; // only the next one
    state.hintsRevealed = idx + 1;
    renderHints();
    renderScore();
    saveProgress();
  }

  function submitGuess(value) {
    if (state.finished) return;
    var verdict = checkGuess(value, state.question.answers);
    if (verdict === "right") {
      finishGame(true);
      return;
    }
    state.wrongGuesses += 1;
    renderTries();
    renderScore();
    saveProgress();
    if (verdict === "close") {
      setFeedback("So close! You're on the right track — refine your answer.", "close");
    } else {
      var msgs = [
        "Not quite. Try a hint?",
        "Nope! Think about the era.",
        "Wrong — but don't give up.",
        "Missed it. A hint might help."
      ];
      setFeedback(msgs[Math.min(state.wrongGuesses - 1, msgs.length - 1)], "wrong");
    }
    els.guessInput.select();
  }

  function finishGame(won) {
    state.solved = won;
    state.failed = !won;
    state.finished = true;
    saveProgress();

    var streak = won ? bumpStreak(state.key + ":" + state.dateObj.getFullYear())
                     : getStreak();
    els.streakValue.textContent = streak;

    renderHints();
    showResult(won);
  }

  function showResult(won) {
    els.gameCard.classList.add("hidden");
    els.resultCard.classList.remove("hidden");

    var score = won ? currentScore() : 0;
    els.resultEmoji.textContent = won ? pickWinEmoji(score) : "📚";
    els.resultTitle.textContent = won ? winTitle(score) : "Out of luck!";
    els.resultAnswer.innerHTML = escapeHtml(state.question.answers[0]);
    els.bigScore.textContent = score;
    els.starsRating.textContent = starsFor(score);
    els.funFact.textContent = state.question.funFact || "";
    els.funFact.style.display = state.question.funFact ? "" : "none";
  }

  function pickWinEmoji(score) {
    if (score >= 90) return "🏆";
    if (score >= 70) return "🎉";
    if (score >= 50) return "👏";
    return "🙂";
  }

  function winTitle(score) {
    if (score >= 90) return "Brilliant!";
    if (score >= 70) return "Well done!";
    if (score >= 50) return "Solved it!";
    return "Got there!";
  }

  // ======================================================================
  // Share
  // ======================================================================

  function buildShareText() {
    var score = state.solved ? currentScore() : 0;
    var line = "📜 Datestiny — " + prettyDate(state.dateObj);
    // hint usage row: filled square per hint used, hollow per unused
    var hintRow = "";
    for (var i = 0; i < 3; i++) hintRow += (i < state.hintsRevealed ? "🟨" : "⬜");
    // guess row: red per wrong guess, green for the solve
    var guessRow = "";
    for (var j = 0; j < state.wrongGuesses; j++) guessRow += "🟥";
    guessRow += state.solved ? "🟩" : "⬛";

    var body =
      line + "\n" +
      "Hints " + hintRow + "  Guesses " + guessRow + "\n" +
      (state.solved
        ? "Score " + score + "/100 " + starsFor(score)
        : "Stumped! 📚") +
      "\n" + location.origin + (location.pathname === "/" ? "" : location.pathname);
    return body;
  }

  function doShare() {
    var text = buildShareText();
    if (navigator.share) {
      navigator.share({ title: "Datestiny", text: text }).catch(function () {});
      return;
    }
    copyText(text).then(function () {
      toast("Result copied to clipboard!");
    }, function () {
      toast("Couldn't copy — select and copy manually.");
    });
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        resolve();
      } catch (e) { reject(e); }
    });
  }

  var toastTimer = null;
  function toast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { els.toast.classList.remove("show"); }, 2200);
  }

  // ======================================================================
  // Countdown to next puzzle
  // ======================================================================
  function startCountdown() {
    function tick() {
      var now = new Date();
      var next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
      var diff = next - now;
      var h = Math.floor(diff / 3600000);
      var m = Math.floor((diff % 3600000) / 60000);
      var s = Math.floor((diff % 60000) / 1000);
      els.countdown.textContent = "Next question in " + pad(h) + ":" + pad(m) + ":" + pad(s);
    }
    tick();
    setInterval(tick, 1000);
  }

  // ======================================================================
  // Practice mode (random past day)
  // ======================================================================
  function playRandom() {
    var keys = Object.keys(window.QUESTIONS || {});
    if (!keys.length) return;
    var key;
    do { key = keys[Math.floor(Math.random() * keys.length)]; }
    while (key === state.key && keys.length > 1);
    loadPuzzle(key, true);
  }

  // ======================================================================
  // Boot
  // ======================================================================

  function loadPuzzle(forceKey, isPractice) {
    var today = new Date();
    var key = forceKey || keyFromDate(today);
    var picked = pickQuestion(key);
    if (!picked) {
      els.question.textContent = "No questions available.";
      return;
    }

    state.key = isPractice ? picked.key : key;
    state.dateObj = today;
    state.question = picked.q;
    state.hintsRevealed = 0;
    state.wrongGuesses = 0;
    state.solved = false;
    state.failed = false;
    state.finished = false;
    state.practice = !!isPractice;

    // restore saved progress for the real daily puzzle
    if (!isPractice) {
      var saved = loadProgress(state.key);
      if (saved) {
        state.hintsRevealed = saved.hintsRevealed || 0;
        state.wrongGuesses = saved.wrongGuesses || 0;
        state.solved = !!saved.solved;
        state.failed = !!saved.failed;
        state.finished = !!saved.finished;
      }
    }

    // header
    els.dateBadge.textContent = isPractice
      ? "Flashback · " + monthDayLabel(picked.key)
      : "On this day · " + prettyDate(today);
    els.categoryBadge.textContent = state.question.category || "History";
    els.question.textContent = state.question.prompt;
    els.lede.textContent = state.practice
      ? "Practice round — replaying a past day. Streak not affected."
      : "Reveal a hint only if you need it — fewer hints means a higher score.";

    // reset UI
    els.gameCard.classList.remove("hidden");
    els.resultCard.classList.add("hidden");
    setFeedback("", "");
    els.guessInput.value = "";
    els.streakValue.textContent = getStreak();

    renderHints();
    renderScore();
    renderTries();

    if (state.finished) {
      showResult(state.solved);
    } else {
      els.guessInput.focus();
    }
  }

  function monthDayLabel(key) {
    var parts = key.split("-");
    return MONTHS[parseInt(parts[0], 10) - 1] + " " + parseInt(parts[1], 10);
  }

  function wireEvents() {
    // hint clicks (delegated)
    els.hints.addEventListener("click", function (e) {
      var box = e.target.closest(".hint-box");
      if (!box) return;
      var idx = parseInt(box.getAttribute("data-index"), 10);
      revealHint(idx);
    });

    els.guessForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = els.guessInput.value.trim();
      if (!v) return;
      submitGuess(v);
      els.guessInput.value = "";
    });

    els.giveUpBtn.addEventListener("click", function () {
      if (state.finished) return;
      if (!confirm("Give up and reveal the answer? This ends today's game.")) return;
      finishGame(false);
    });

    els.shareBtn.addEventListener("click", doShare);
    els.practiceBtn.addEventListener("click", playRandom);

    // modal
    function openModal() { els.howToModal.classList.remove("hidden"); }
    function closeModal() { els.howToModal.classList.add("hidden"); }
    els.howToBtn.addEventListener("click", openModal);
    els.modalClose.addEventListener("click", closeModal);
    els.gotItBtn.addEventListener("click", closeModal);
    els.howToModal.addEventListener("click", function (e) {
      if (e.target === els.howToModal) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });

    $("streakChip").addEventListener("click", function () {
      var s = getStreak();
      toast(s > 0 ? "🔥 " + s + "-day streak — keep it going!" : "Solve today's puzzle to start a streak!");
    });
  }

  function init() {
    if (!window.QUESTIONS) {
      els.question.textContent = "Failed to load questions.";
      return;
    }
    wireEvents();
    loadPuzzle(null, false);
    startCountdown();

    // first-time visitors see the rules
    try {
      if (!localStorage.getItem("datestiny.seenRules")) {
        els.howToModal.classList.remove("hidden");
        localStorage.setItem("datestiny.seenRules", "1");
      }
    } catch (e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
