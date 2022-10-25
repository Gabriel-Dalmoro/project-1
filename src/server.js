import express from 'express';
import { ROOM_CHALLENGES } from './helper-files/story.js';
import {
  createUserName,
  directionLogic,
  findUserName,
  updateUser,
} from './helper-files/utils.js';

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

app.post('/newUser', (req, res) => {
  const { x, y, amountOfKeys } = req.body;
  const sendNewUser = createUserName(x, y, amountOfKeys);
  res.send(sendNewUser);
  console.log(res);
});

app.get('/find/:user', (req, res) => {
  res.send(findUserName(req.params.user));
});

app.patch('/update/:user', (req, res) => {
  res.send(updateUser(req.params.user));
});
