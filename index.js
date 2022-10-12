//basic structure to the game
import * as graphics from './helper-files/graphics.js';
import cfonts from 'cfonts';
import rl from 'readline-sync';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { intro, roomDescriptions } from './story.js';

const log = console.log;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// function locationLog(x, y) {
//   log(`Your location is: x = ${x}, y = ${y}.`);
// }
function directionLogic(command) {
  let newX = x;
  let newY = y;
  command === 'north' || command === 'up' || command === 'n'
    ? newY++
    : command === 'south' || command === 'down'
    ? newY--
    : command === 'east' || command === 'right'
    ? newX++
    : command === 'west' || command === 'left'
    ? newX--
    : command === 'map' || command === 'Map'
    ? log('Here is your location:')
    : log(chalk.yellow('command not valid'));
  if (newX <= 3 && newX >= 1 && newY <= 3 && newY >= 1) {
    x = newX;
    y = newY;
    // locationLog(x, y);
  } else {
    log(chalk.red.bold('You cant go that way.'));
  }
  if (command === 'map' || command === 'Map') {
    currentLocationMap(x, y);
  } else {
    return;
  }
}

function currentLocationMap(x, y) {
  x === 1 && y === 1
    ? log(graphics.map11)
    : x === 1 && y === 2
    ? log(graphics.map12)
    : x === 1 && y === 3
    ? log(graphics.map13)
    : x === 2 && y === 1
    ? log(graphics.map21)
    : x === 2 && y === 2
    ? log(graphics.map22)
    : x === 2 && y === 3
    ? log(graphics.map23)
    : x === 3 && y === 1
    ? log(graphics.map31)
    : x === 3 && y === 2
    ? log(graphics.map32)
    : log(graphics.map33);
}
async function welcome() {
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
await intro();
await welcome();
log('You are in the start');
await sleep(500);
log(graphics.map22);
let x = 2;
let y = 2;
await sleep(1500);

while (true) {
  log(
    chalk.hex('#FFC400').italic(
      `tip: at any point you can input "map" to see your current location
        `
    )
  );
  let chooseDirection = rl.question(
    chalk.hex('#FFC400').underline.bold('Where would you like to go? ') + ' '
  );
  directionLogic(chooseDirection);
  await roomDescriptions(x, y);
  // currentLocationMap(x, y);
  // log(`--<>--<>--<>--<>--<>--<>--<>--<>--<>--`);
}
