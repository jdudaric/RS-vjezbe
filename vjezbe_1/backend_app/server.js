const express = require('express');
const app = express();

// Javni demonstracijski API bez prijave i privatnih podataka.
// CORS dopušta frontend aplikaciji na drugoj domeni pristup odgovorima.
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});
app.use(express.json({ limit: '10kb' }));

app.get('/', (req, res) => {
  res.json({ message: 'RS API radi!', endpoints: ['GET /api/health', 'GET /api/courses', 'POST /api/echo'] });
});
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});
app.get('/api/courses', (req, res) => {
  res.json([{ id: 1, name: 'Raspodijeljeni sustavi' }, { id: 2, name: 'Web aplikacije' }]);
});
app.post('/api/echo', (req, res) => {
  if (typeof req.body?.message !== 'string' || !req.body.message.trim() || req.body.message.length > 500) {
    return res.status(400).json({ error: 'Pošalji message kao tekst od 1 do 500 znakova.' });
  }
  res.json({ message: req.body.message.trim(), receivedAt: new Date().toISOString() });
});
app.use((req, res) => res.status(404).json({ error: 'Endpoint ne postoji.' }));
app.use((err, req, res, next) => {
  const status = err.status === 400 || err.status === 413 ? err.status : 500;
  res.status(status).json({ error: status === 400 ? 'Neispravan JSON.' : status === 413 ? 'Zahtjev je prevelik.' : 'Greška poslužitelja.' });
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => console.log(`RS API sluša na portu ${port}`));
