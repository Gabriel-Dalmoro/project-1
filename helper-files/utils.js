import chalk from 'chalk';
import { ROOM_CHALLENGES, ROOM_DESCRIPTIONS } from './story.js';
import { MAPS_OBJECT } from '../helper-files/graphics.js';

function findRoomDescriptions(x, y) {
  return ROOM_DESCRIPTIONS['x' + x + 'y' + y];
}

function currentLocationMap(x, y) {
  return (
    `Here is your location:
      ` + MAPS_OBJECT['map' + x + y]
  );
}

export function showRoomChallenges(x, y) {
  return ROOM_CHALLENGES['room' + x + y];
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
