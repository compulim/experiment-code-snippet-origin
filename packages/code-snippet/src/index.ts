console.log('Snippet loaded.');

(async function () {
  const res = await fetch('http://localhost:8002/api/origin', { method: 'POST' });

  if (!res.ok) {
    return console.log(`Service returned error ${res.status}`);
  }

  const json = await res.json();

  console.log(`Service returned object`, json);
})();
