import chalk from 'chalk';
import { ROOM_DESCRIPTIONS } from './story.js';
import { MAPS_OBJECT } from '../helper-files/graphics.js';
import { rockPaperScissorsMiniGame } from './RPS-minigame/RPS-index.js';

const log = console.log;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function findRoomDescriptions(x, y) {
  return ROOM_DESCRIPTIONS['x' + x + 'y' + y];
}

function currentLocationMap(x, y) {
  return (
    `Here is your location:
      ` + MAPS_OBJECT['map' + x + y]
  );
}

export function directionLogic(command, x, y) {
  let message;
  let newX = x;
  let newY = y;
  let answer;
  command.toLowerCase() === 'north' || command.toLowerCase() === 'up'
    ? newY++
    : command.toLowerCase() === 'south' || command.toLowerCase() === 'down'
    ? newY--
    : command.toLowerCase() === 'east' || command.toLowerCase() === 'right'
    ? newX++
    : command.toLowerCase() === 'west' || command.toLowerCase() === 'left'
    ? newX--
    : command.toLowerCase() === 'map'
    ? (message = currentLocationMap(x, y))
    : command.toLowerCase() === 'bear'
    ? newX
    : (message = chalk.yellow('Command not valid'));
  if (command.toLowerCase() === 'map') {
    answer = { x, y, message };
    return answer;
  }
  if (message === chalk.yellow('Command not valid')) {
    answer = { x, y, message };
    return answer;
  }
  if (newX <= 3 && newX >= 1 && newY <= 3 && newY >= 1) {
    message = findRoomDescriptions(newX, newY);
    return { x: newX, y: newY, message };
  } else {
    message = chalk.red.bold('You cant go that way.');
    return { x, y, message };
  }
}

function getOccurrence(array, value) {
  return array.filter((v) => v === value).length;
}

export function keysLogc(x, y, command, keysTracker) {
  function pickUpKeys(x, y, command) {
    let winner;
    if (x === 2 && y === 1) {
      while (winner !== 'player') {
        winner = rockPaperScissorsMiniGame();
        if (winner === 'player') {
          keysTracker[0] = true;
          log(
            chalk.green.bold(`You have won! 
          The monk is greatly impressed, and hands you a key!
He still has a long journey torwards Rock Paper Scissors enlightenment.
`)
          );
          log(`You have ${getOccurrence(keysTracker, true)} keys`);
        } else {
          log(
            chalk.red.bold(`You have lost.
        
        The monk deems you not worthy of receiving his precious key.
        
        You must try again to beat him in a best-of-5.
        
      `)
          );
        }
      }
    } else if (x === 2 && y === 3) {
      if (command.toLowerCase() === 'bear') {
        keysTracker[1] = true;
        log(
          chalk.green.bold(`That is correct!`) +
            `
        
        The elf recognizes your deep appreciation and reverence for nature and gladly hands you a key!
        `
        );
        log(`You have ${getOccurrence(keysTracker, true)} keys`);
      }
    } else if (x === 1 && y === 3) {
      keysTracker[2] = true;
      log(`You have ${getOccurrence(keysTracker, true)} keys`);
    }
  }
  pickUpKeys(x, y, command);
}

export async function endOfGame(x, y, keysTracker) {
  if (x === 3 && y === 3) {
    if (getOccurrence(keysTracker, true) === 3) {
      log(chalk.green.bold.underline(`You have all 3 keys!`));
      await sleep(1500);
      log(`
      You use the three keys which you so skillfully aquired to activate the hidden rocketship.
      `);
      await sleep(3200);
      log(`
       !
       !
       ^
      / \\
     /___\\
    |=   =|
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
   /|##!##|\\
  / |##!##| \\
 /  |##!##|  \\
|  / ^ | ^ \\  |
| /  ( | )  \\ |
|/   ( | )   \\|
    ((   ))
   ((  :  ))
   ((  :  ))
    ((   ))
     (( ))
      ( )
       .
       .
       .
      `);
      return true;
    } else if (getOccurrence(keysTracker, true) === 2) {
      log(`
      You are missing 1 key!
      Come back when you have all 3 keys.
      `);
    } else if (getOccurrence(keysTracker, true) === 1) {
      log(`
      You are missing 2 keys!
      Come back when you have all 3 keys.
      `);
    }
  }
}
