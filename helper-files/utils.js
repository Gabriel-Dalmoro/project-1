import chalk from 'chalk';
import { ROOM_DESCRIPTIONS } from './story.js';
import { MAPS_OBJECT } from '../helper-files/graphics.js';
import { rockPaperScissorsMiniGame } from './RPS-minigame/RPS-index.js';
// import { keysArr } from '../index.js';

const log = console.log;

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
  command === 'north' || command === 'up'
    ? newY++
    : command === 'south' || command === 'down'
    ? newY--
    : command === 'east' || command === 'right'
    ? newX++
    : command === 'west' || command === 'left'
    ? newX--
    : command === 'map' || command === 'Map'
    ? (message = currentLocationMap(x, y))
    : command === 'bear' || command === 'Bear'
    ? newX
    : (message = chalk.yellow('Command not valid'));
  if (command === 'map' || command === 'Map') {
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

export function keysLogc(x, y, command, keysTracker) {
  function pickUpKeys(x, y, command) {
    let winner;
    function getOccurrence(array, value) {
      return array.filter((v) => v === value).length;
    }
    // let keysArr = [false, false, false];
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
      if (command === 'bear' || command === 'Bear') {
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
