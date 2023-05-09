## experiment-code-snippet-origin

This experiment has the following setup:

- App server (CDN) serving `index.html` on port 8000
- Code snippet (CDN) serving `code-snippet.min.js` on port 8001
- API server answering `POST /api/origin` on port 8002

The `index.html` will run `<script src="code-snippet.min.js">`. The `code-snippet.min.js` will `fetch('http://localhost:8002/api/origin', { method: 'post' })`.

We want to make sure, the API server should see HTTP header `Origin: http://localhost:8000`.
