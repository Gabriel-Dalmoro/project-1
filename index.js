//basic structure to the game
import * as graphics from './src/helper-files/graphics.js';
import cfonts from 'cfonts';
import rl from 'readline-sync';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { intro } from './src/helper-files/story.js';
import fetch from 'node-fetch';
import { endOfGame, keysLogc } from './src/helper-files/utils.js';
import User from './src/database/model/User.js';

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

async function getUser() {
  log(
    `Would you like to create a new user-name, input your existing user-name, or play as guest?`
  );
  await sleep(1500);
  const userArr = [
    'Create user-name',
    'Input existing user-name',
    'Play as guest',
  ];
  const userChoice =
    userArr[
      rl.keyInSelect(userArr, 'Use number keys [1], [2], or [3] to choose: ')
    ];
  if (userChoice === 'Create user-name') {
    const newUserName = rl.question('Choose your new user-name: ');
    return await User.create({
      userName: newUserName,
    });
  } else if (userChoice === 'Input existing user-name') {
    const existingUserName = rl.question('What is your existing user-name: ');
    return await User.findOne({ userName: existingUserName });
  }
}

// await intro();
// await welcome();
let user = await getUser();
log(user);
log('You are in the start');
await sleep(500);
log(graphics.MAPS_OBJECT.map22);

await sleep(2500);
async function gameLoop() {
  let keysTracker = [false, false, false];
  let y = 2;
  let x = 2;
  while (true) {
    log(
      chalk
        .hex('#FFC400')
        .italic(
          `tip: at any point you can input "map" to see your current location`
        )
    );
    let command = rl.question(
      chalk.hex('#FFC400').underline.bold(`Where would you like to go?`) + ` `
    );
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
      command !== 'bear'
    ) {
      continue;
    }
    x = directionResult.x;
    y = directionResult.y;
    const roomChallengeResult = await roomChallengeGetRequest(x, y);
    await sleep(2000);
    log(roomChallengeResult);
    await sleep(1500);
    keysLogc(x, y, command, keysTracker);
    const threeKeys = await endOfGame(x, y, keysTracker);
    if (threeKeys === true) {
      break;
    }
  }
  await sleep(2300);
  cfonts.say('The End', {
    colors: ['green'],
    font: 'block',
  });
  await sleep(2000);
  log(
    chalk.green.bold(`Thank you for playing!
  `)
  );
}

gameLoop();
