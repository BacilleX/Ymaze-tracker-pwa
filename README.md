# Y‑Maze Tracker

Web Progressive App to record Y‑Maze arm entries (A, B, C) per subject, compute alternation metrics, run timed sessions and export results for analysis.

Live demo / installable PWA: https://bacillex.github.io/Ymaze-tracker-pwa/

## Summary
Y‑Maze Tracker is a lightweight, offline-capable web app designed to help labs and researchers record mouse arm entries in Y‑maze tests without needing video recording. It provides a simple interface to log A/B/C entries per subject, an adjustable session timer, per-subject stats and an Excel‑friendly CSV export.

## Why this matters
Not all laboratories have video recording or automated tracking systems. In many places experimenters still record arm passages by hand. This app was created to replace handwritten logs with a fast, mobile-friendly interface that:
- speeds data collection during live trials,
- ensures consistent recording format,
- automatically computes key metrics for analysis,
- exports ready-to-open CSV files for statistics.

At the core: some labs rely on manual entry of arm passages. Y‑Maze Tracker offers a compact digital tool to make that process faster and less error-prone.

## Features
- Per-subject cards: add/remove subjects, append A/B/C entries, Undo last entry
- Automatic stats: total entries, number of correct alternations, alternation ratio
- Timer with alert when time reaches 0 (modal popup)
- Zoom controls and responsive UI for mobile & desktop
- Offline-ready (PWA + service worker), stores sessions locally
- Export to Excel‑friendly CSV (semicolon separator, `sep=;` hint, UTF‑8 BOM)

## How to use
1. Open the app (or install it from the browser to use as a PWA).
2. Create a session name and press Create.
3. Add subject IDs using the input and Add button.
4. For each subject, press A / B / C to record an arm entry. Use Undo to remove the last entry.
5. Start the session timer with Play. When the timer reaches zero a modal will appear and block controls for a short time.
6. Press Export to download a CSV of the session.

## CSV export details
CSV columns: `session`, `startedAt`, `mouse_id`, `entries`, `alternances`, `ratio_percent`, `sequence`

- The sequence is exported as the concatenated letters recorded for the subject.
- `alternances` is the count of correct alternations (three successive, different arms).
- `ratio_percent` in the CSV is exported with three decimals for precision and is calculated as:

  ratio_percent = (good_alternations / (total_entries - 2)) * 100

  (If `total_entries <= 2`, ratio is defined as 0.)

- The export is formatted to be Excel-friendly (semicolon separator and UTF‑8 BOM). If Excel shows a single column, import the file with semicolon as the delimiter.

## Install / Run locally (macOS)
- Quick: open `index.html` in a browser (service-worker features may be limited when opened as `file://`).
- Recommended: run a local server so PWA / service worker can register:
  - Python: `python3 -m http.server 8000` → open `http://localhost:8000`
  - Node: `http-server` (npm) and open the served URL

## Install on mobile (PWA)
- Open the site in your mobile browser.
- Use the browser menu → “Add to Home Screen” (or Install).
- After first load the app works offline until site data is cleared.

## Contributing
Improvements and bug fixes are welcome. Open issues or pull requests on the repository. The project is intentionally simple — if you have ideas (UX improvements, CSV formats, additional stats, multi-user sync), please contribute.

## License
See the LICENSE file included in this repository.