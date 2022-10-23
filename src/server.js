import express from 'express';
import { ROOM_CHALLENGES } from './helper-files/story.js.js';
import { directionLogic } from './helper-files/utils.js.js';

const app = express();
const PORT = 4005;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}.`);
});

app.post('/gameMove', (req, res) => {
  const { command, x, y } = req.body;
  const directionResponse = directionLogic(command, x, y);
  res.send(directionResponse);
});

app.get('/roomChallenge/:room', (req, res) => {
  res.send(ROOM_CHALLENGES[req.params.room]);
});
