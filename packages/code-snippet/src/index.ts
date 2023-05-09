console.log('Snippet loaded.');

(async function () {
  const url = document.currentScript?.getAttribute('data-url');

  if (!url) {
    throw new Error('"data-url" attribute must be present on the <script> tag.');
  }

  const res = await fetch(url, { method: 'POST' });

  if (!res.ok) {
    return console.log(`Service returned error ${res.status}`);
  }

  const json = await res.json();

  console.log(`Service returned object`, json);

  if (json.origin === location.origin) {
    console.log(
      '%c✅ This is correct behavior. The service should return http://localhost:8000, which is the origin of the HTML file that ping http://localhost:8002.',
      'font-family: sans-serif;'
    );
  } else {
    console.warn(
      `%c❌ This is incorrect behavior. The service should return http://localhost:8000, instead it returned ${json.origin}.`,
      'font-family: sans-serif;'
    );
  }
})();
