let clicks = 0;
const count = document.querySelector('#count');

document.querySelector('#increment').addEventListener('click', () => {
  clicks += 1;
  count.textContent = clicks;
});

document.querySelector('#reset').addEventListener('click', () => {
  clicks = 0;
  count.textContent = clicks;
});

const apiUrl = document.querySelector('#api-url');
const result = document.querySelector('#api-result');
apiUrl.value = window.API_BASE_URL || (['localhost', '127.0.0.1'].includes(location.hostname) ? 'http://localhost:3000' : '');

async function requestApi(path, method = 'GET', body) {
  try {
    const base = new URL(apiUrl.value.trim());
    if (!['http:', 'https:'].includes(base.protocol)) throw new Error('Upiši HTTP ili HTTPS adresu.');
    result.textContent = 'Čekam odgovor poslužitelja…';
    const response = await fetch(new URL(path, base), {
      method,
      ...(body ? { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {})
    });
    const data = await response.json();
    result.textContent = `${method} ${path}\nHTTP ${response.status}\n${JSON.stringify(data, null, 2)}`;
  } catch (error) {
    result.textContent = `Zahtjev nije uspio. Provjeri adresu i je li backend pokrenut.\n${error.message}`;
  }
}

document.querySelector('#health').addEventListener('click', () => requestApi('/api/health'));
document.querySelector('#courses').addEventListener('click', () => requestApi('/api/courses'));
document.querySelector('#echo').addEventListener('click', () => requestApi('/api/echo', 'POST', {
  message: document.querySelector('#message').value
}));
