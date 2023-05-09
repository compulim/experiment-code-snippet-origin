import cors from 'cors';
import express from 'express';
import { createServer } from 'http';

const { PORT = 8002 } = process.env;

const app = express();
const server = createServer(app);

app.use(cors());

app.post('/api/origin', (req, res) => {
  const origin = req.get('origin');

  console.log(`Origin is ${origin}.`);

  res.set('content-type', 'application/json');
  res.send(JSON.stringify({ origin }));
});

server.listen(PORT, () => console.log(`Service now listening to port ${PORT}`));
