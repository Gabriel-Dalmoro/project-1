//basic structure to the game
import * as graphics from './helper-files/graphics.js';
import cfonts from 'cfonts';
import rl from 'readline-sync';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { intro, roomDescriptions } from './story.js';

// let visit11;
const log = console.log;
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// function locationLog(x, y) {
//   log(`Your location is: x = ${x}, y = ${y}.`);
// }

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
// await intro();
// await welcome();
log('You are in the start');
await sleep(500);
log(graphics.map22);

await sleep(1500);

while (true) {
  log(
    chalk
      .hex('#FFC400')
      .italic(
        `tip: at any point you can input "map" to see your current location`
      )
  );
  let chooseDirection = rl.question(
    chalk.hex('#FFC400').underline.bold('Where would you like to go?') + ' '
  );
  directionLogic(chooseDirection);
  graphics.mapQuadrantVisit(x, y);
  // log(graphics.visit11);
  // await roomDescriptions(x, y);
}
