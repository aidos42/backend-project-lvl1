import readlineSync from 'readline-sync';
import playGameEven from './games/even.js';
import playGameCalc from './games/calc.js';
import playGameGcd from './games/gcd.js';
import playGameProgression from './games/progression.js';
import playGamePrime from './games/prime.js';

const playGameByType = (name, typeOfGame) => {
  switch (typeOfGame) {
    case 'even':
      playGameEven(name);
      break;
    case 'calc':
      playGameCalc(name);
      break;
    case 'gcd':
      playGameGcd(name);
      break;
    case 'progression':
      playGameProgression(name);
      break;
    default:
      playGamePrime(name);
  }
};

const startGame = (typeOfGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  playGameByType(name, typeOfGame);
};

export default startGame;
