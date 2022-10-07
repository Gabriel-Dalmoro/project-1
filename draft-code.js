//basic structure to the game
import * as graphics from './graphics.js';
import cfonts from 'cfonts';
import rl from 'readline-sync';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

const log = console.log;
function locationLog(x, y) {
  log(`Your location is: x = ${x}, y = ${y}.`);
}
function directionLogic(direction) {
  let newX = x;
  let newY = y;
  direction === 'north' || direction === 'up'
    ? newY++
    : direction === 'south' || direction === 'down'
    ? newY--
    : direction === 'east' || direction === 'right'
    ? newX++
    : direction === 'west' || direction === 'left'
    ? newX--
    : log(chalk.yellow('command not valid'));
  if (newX <= 3 && newX >= 1 && newY <= 3 && newY >= 1) {
    x = newX;
    y = newY;
    locationLog(x, y);
  } else {
    log(chalk.red.bold('You cant go that way.'));
  }
}

function roomDescriptions(x, y) {
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

cfonts.say("Gabriel's amazing game", {
  gradient: ['yellow', 'green'],
  font: 'block',
  background: 'transparent',
});
log('You are in the start');
log(graphics.map22);
let x = 2;
let y = 2;

while (true) {
  let chooseDirection = rl.question('Where would you like to go? ');
  directionLogic(chooseDirection);
  roomDescriptions(x, y);
}
