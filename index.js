//basic structure to the game
import * as graphics from './src/helper-files/graphics.js';
import cfonts from 'cfonts';
import rl from 'readline-sync';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { intro } from './src/helper-files/story.js';
import fetch from 'node-fetch';
import {
  createUserName,
  endOfGame,
  findUserName,
  getOccurrence,
  keysLogc,
  updateUser,
} from './src/helper-files/utils.js';
import User from './src/database/model/User.js';
import mongoose from 'mongoose';

const log = console.log;
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

//running game:
export async function welcome() {
  const rainbowTitle = chalkAnimation.karaoke(
    `    ====================
    Get ready to play...
    ====================`,
    0.68
  );
  await sleep(3000);
  rainbowTitle.stop();
  cfonts.say('The Game', {
    colors: ['#FFC400'],
    font: 'block',
    background: 'transparent',
  });
}

async function directionPostRequest(x, y, command) {
  const body = { x, y, command };
  const response = await fetch('http://localhost:4005/gameMove', {
    method: 'Post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  return data;
}

async function roomChallengeGetRequest(x, y) {
  const response = await fetch(
    'http://localhost:4005/roomChallenge/room' + x + y
  );
  const data = await response.text();
  return data;
}

// await intro();
await welcome();
log(
  `Would you like to create a new user-name, input your existing user-name, or play as guest?`
);
await sleep(2500);
const userArr = [
  'Create user-name',
  'Input existing user-name',
  'Play as guest',
];
const userChoice =
  userArr[
    rl.keyInSelect(userArr, 'Use number keys [1], [2], or [3] to choose: ')
  ];
let user;
let amountOfKeys;
let x;
let y;
if (userChoice === 'Create user-name') {
  const newUserName = rl.question('Choose your new user-name: ');
  user = await createUserName(newUserName);
} else if (userChoice === 'Input existing user-name') {
  const existingUserName = rl.question('What is your existing user-name: ');
  user = await findUserName(existingUserName);
} else if (userChoice === 'Play as guest') {
  user = await findUserName('guestUser');
}

amountOfKeys = user.amountOfKeys;
x = user.x;
y = user.y;

await sleep(2500);
async function gameLoop() {
  while (true) {
    log(
      chalk.hex('#FFC400').italic(
        `tips: 
    - at any point you can input "map" to see your current location.
    - if you created a user-name, input "quit" to exit the game and save your progress.
    - input "keys" to check how many keys you have.
            `
      )
    );
    let command = rl.question(
      chalk.hex('#FFC400').underline.bold(`What is your command?`) + ` `
    );
    if (command === 'keys') {
      log(
        chalk.bold(`
      You have ${getOccurrence(amountOfKeys, true)} keys
      `)
      );
      continue;
    }
    if (command === 'quit' && user.userName !== 'guestUser') {
      updateUser(user, x, y, amountOfKeys);
      log(`Saving game...`);
      break;
    }
    const directionResult = await directionPostRequest(x, y, command);
    log(directionResult.message);
    if (command === 'map' || command === 'Map') {
      continue;
    }
    if (
      command !== 'south' &&
      command !== 'north' &&
      command !== 'east' &&
      command !== 'west' &&
      command !== 'up' &&
      command !== 'down' &&
      command !== 'left' &&
      command !== 'right' &&
      command !== 'quit' &&
      command !== 'keys' &&
      command !== 'bear'
    ) {
      continue;
    }
    x = directionResult.x;
    y = directionResult.y;
    const roomChallengeResult = await roomChallengeGetRequest(x, y);
    await sleep(4000);
    log(roomChallengeResult);
    await sleep(1500);
    keysLogc(x, y, command, amountOfKeys);
    const threeKeys = await endOfGame(x, y, amountOfKeys);
    if (threeKeys === true) {
      await sleep(2300);
      cfonts.say('The End', {
        colors: ['green'],
        font: 'block',
      });
      break;
    }
  }
  await sleep(2000);
  log(
    chalk.green.bold(`Thank you for playing!
  `)
  );
  process.exit();
}

gameLoop();
