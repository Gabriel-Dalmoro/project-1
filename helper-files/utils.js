import chalk from 'chalk';
import { ROOM_DESCRIPTIONS } from '../story.js';
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

export function directionLogic(command, x, y) {
  let message;
  let newX = x;
  let newY = y;
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
    return { x, y, message };
  }
  if (message === chalk.yellow('Command not valid')) {
    return { x, y, message };
  }
  if (newX <= 3 && newX >= 1 && newY <= 3 && newY >= 1) {
    message = findRoomDescriptions(newX, newY);
    return { x: newX, y: newY, message };
  } else {
    message = chalk.red.bold('You cant go that way.');
    return { x, y, message };
  }
}
