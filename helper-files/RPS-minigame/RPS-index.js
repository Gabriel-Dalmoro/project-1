import chalk from 'chalk';
import rl from 'readline-sync';
// import { keysArr } from '../../index.js';
import {
  declareComputerWinner,
  declarePlayerWinner,
  logRoundGraphics,
  bothScores,
  log,
} from './RPS-helpers.js';
import { makeRandomComputerChoice, getPlayerChoice } from './RPS-constants.js';

// keysArr[false, false, false];
export function rockPaperScissorsMiniGame() {
  let playerScore = 0;
  let computerScore = 0;
  let winner;
  for (
    let currentGame = 1;
    computerScore < 3 && playerScore < 3;
    currentGame++
  ) {
    //TODO: change for loop into while loop
    log('Now you must choose Rock, Paper or Scissors:');
    let playerChoice = getPlayerChoice();
    log(`You chose: ${playerChoice}.`);
    let computerRandomChoice = makeRandomComputerChoice();
    log(`The monk chose: ${computerRandomChoice}.`);

    function gameLogic(playerChoice, computerRandomChoice) {
      bothScores(playerScore, computerScore);
      if (playerChoice === computerRandomChoice) {
        log('draw');
        bothScores(playerScore, computerScore);
      }
      if (playerChoice === 'Rock') {
        if (computerRandomChoice === 'Paper') {
          logRoundGraphics(playerChoice, computerRandomChoice);
          declareComputerWinner();
          computerScore++;
          bothScores(playerScore, computerScore);
        }
        if (computerRandomChoice === 'Scissors') {
          logRoundGraphics(playerChoice, computerRandomChoice);
          declarePlayerWinner;
          playerScore++;
          bothScores(playerScore, computerScore);
        }
      }
      if (playerChoice === 'Paper') {
        if (computerRandomChoice === 'Rock') {
          logRoundGraphics(playerChoice, computerRandomChoice);
          declarePlayerWinner;
          playerScore++;
          bothScores(playerScore, computerScore);
        }
        if (computerRandomChoice === 'Scissors') {
          logRoundGraphics(playerChoice, computerRandomChoice);
          declareComputerWinner();
          computerScore++;
          bothScores(playerScore, computerScore);
        }
      }
      if (playerChoice === 'Scissors') {
        if (computerRandomChoice === 'Rock') {
          logRoundGraphics(playerChoice, computerRandomChoice);
          declareComputerWinner();
          computerScore++;
          bothScores(playerScore, computerScore);
        }
        if (computerRandomChoice === 'Paper') {
          logRoundGraphics(playerChoice, computerRandomChoice);
          declarePlayerWinner();
          playerScore++;
          bothScores(playerScore, computerScore);
        }
      }
    }
    gameLogic(playerChoice, computerRandomChoice);
  }
  if (playerScore === 3) {
    winner = 'player';
    chalk.green(`You are the winner!`);
  } else if (computerScore === 3) {
    winner = 'monk';
    chalk.red(`The monk is the winner!`);
  }
  return winner;
}
