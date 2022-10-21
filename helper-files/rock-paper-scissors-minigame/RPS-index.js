import cfonts from 'cfonts';
import rl from 'readline-sync';
import {
  declareComputerWinner,
  declarePlayerWinner,
  logRoundGraphics,
  bothScores,
  log,
} from './RPS-helpers.js';
import { makeRandomComputerChoice, getPlayerChoice } from './RPS-constants.js';

// type number keys [1], [2], [3], etc to select your choice.`);
let playerScore = 0;
let computerScore = 0;
export function rockPaperScissorsMiniGame() {
  for (
    let currentGame = 1;
    computerScore <= 3 || playerScore <= 3;
    currentGame++
  ) {
    let winner;
    if (playerScore === 3) {
      winner = 'player';
    } else if (computerScore === 3) {
      winner = 'hermit';
    }
    log('Now you must choose Rock, Paper or Scissors:');
    let playerChoice = getPlayerChoice();
    log(`You chose: ${playerChoice}.`);
    let computerRandomChoice = makeRandomComputerChoice();
    log(`The computer chose: ${computerRandomChoice}.`);

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
}
