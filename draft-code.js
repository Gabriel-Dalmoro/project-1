//basic structure to the game
import { theMap } from './graphics.js';
import rl from 'readline-sync';
const log = console.log;
function locationLog(x, y) {
  log(`Your location is: x = ${x}, y = ${y}.`);
}
//MAKE GIT COMMITS!!!!!!!!!!!!

log('You are in the start');
locationLog(2, 2);
log(theMap);
let x = 2;
let y = 2;
while (1 >= x <= 3 && 1 >= y <= 3) {
  let chooseDirection = rl.question('Where would you like to go? ');
  //   if (x <= 3 && x >= 1 && y <= 3 && y >= 1) {
  function directionLogic(direction) {
    direction === 'north'
      ? y++ && locationLog(x, y)
      : direction === 'south'
      ? y-- && locationLog(x, y)
      : direction === 'east'
      ? x++ && locationLog(x, y)
      : direction === 'west'
      ? x-- && locationLog(x, y)
      : log('command not valid');
  }
  directionLogic(chooseDirection);
  //   } else {
  //     log("You can't go that way.");
  //   }
}
