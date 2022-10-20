//basic structure to the game
import * as graphics from './helper-files/graphics.js';
import cfonts from 'cfonts';
import rl from 'readline-sync';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
// import { intro, roomDescriptions } from './story.js';
import { directionLogic } from './helper-files/utils.js';
import fetch from 'node-fetch';

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
  const response = await fetch('http://localhost:4005/roomChallenge/:room');
  const data = await response.json();

  log(data['room' + x + y]);
}

// await intro();
// await welcome();
// log('You are in the start');
// await sleep(500);
// log(graphics.MAPS_OBJECT.map22);

// await sleep(1500);
async function gameLoop() {
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
    let chooseDirection = rl.question(
      chalk.hex('#FFC400').underline.bold(`Where would you like to go? `)
    );
    const directionResult = await directionPostRequest(x, y, chooseDirection);
    log(directionResult.message);
    const roomChallengeResult = await roomChallengeGetRequest(x, y);
    log(roomChallengeResult);
    x = directionResult.x;
    y = directionResult.y;
  }
}
gameLoop();
