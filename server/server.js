import express from 'express';
import { ROOM_CHALLENGES } from '../helper-files/story.js';
import { directionLogic, showRoomChallenges } from '../helper-files/utils.js';

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
  // req.params.room = ROOM_CHALLENGES['room' + x + y];
  req.params.room = ROOM_CHALLENGES.room23;
  const roomChallengeResponse = showRoomChallenges(2, 3);
  // const roomChallengeResponse = showRoomChallenges(x, y);
  // console.log(roomChallengeResponse);
  // res.send(ROOM_CHALLENGES);
  res.send(roomChallengeResponse);
});
