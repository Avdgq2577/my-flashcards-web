# My Flashcards Web

A small single-page flashcards web app built with plain HTML, CSS, and JavaScript. It provides a lightweight interface to create, view, and review flashcards in the browser.

## Features
- Create and edit flashcards (front/back)
- Flip cards to reveal answers
- Simple client-side storage (no backend)

## Project files
- `index.html` — the app UI
- `script.js` — application logic and storage
- `style.css` — styles and layout

## Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.)

## Run locally (VS Code)
1. Open the project folder in VS Code: `File → Open Folder...` and choose this repo.
2. Recommended: install the **Live Server** extension.
   - After installing, open `index.html`, then click **Go Live** (bottom-right) or right-click the file and choose **Open with Live Server**.
   - The app will open at `http://127.0.0.1:5500` (or another port shown by Live Server).
3. Alternative: use the integrated terminal to run a simple HTTP server:

```bash
# Python 3
python3 -m http.server 8000
# or with Node (if you have http-server installed)
npx http-server -p 8000
# then open http://localhost:8000 in your browser
```

## Open in browser without a server
- For basic testing you can open `index.html` directly in the browser, but some browser features (like fetch of local files) may be restricted.

## Debugging / Development tips
- Use the browser devtools (F12) to inspect console logs and storage.
- Edit `script.js` and `style.css` in VS Code; Live Server will auto-reload the page.

