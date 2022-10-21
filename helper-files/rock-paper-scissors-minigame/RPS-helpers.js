import cfonts from 'cfonts';
import * as graphics from './RPS-graphics.js';

export const declareComputerWinner = () =>
  cfonts.say('The winner is the computer', {
    colors: ['red'],
    font: 'console',
  });
export const declarePlayerWinner = () =>
  cfonts.say(`You are the winner!`, { colors: ['green'], font: 'console' });
export const log = console.log;

const objOfGraphicCombos = {
  Rock: graphics.rockGraphic,
  Paper: graphics.paperGraphic,
  Scissors: graphics.scissorsGraphic,
};

export function logRoundGraphics(playerChoice, computerRandomChoice) {
  log(`${objOfGraphicCombos[playerChoice]} 
      VS
      ${objOfGraphicCombos[computerRandomChoice]}`);
}

export function bothScores(playerScore, computerScore) {
  log(`
  Your total score = ${playerScore}.
  The computer's total score = ${computerScore}.
  `);
}
