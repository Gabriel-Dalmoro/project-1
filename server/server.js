import express from 'express';
import { directionLogic } from '../helper-files/utils.js';

const app = express();
const PORT = 4005;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}.`);
});

app.post('/gameMove', (req, res) => {
  const { command, x, y } = req.body;
  res.send(directionLogic(command, x, y));
});
