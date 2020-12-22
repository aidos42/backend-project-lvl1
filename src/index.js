import readlineSync from 'readline-sync';
import playGameEven from './games/even.js';
import playGameCalc from './games/calc.js';
import playGameGcd from './games/gcd.js';
import playGameProgression from './games/progression.js';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

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
      console.log('Good luck, have fun');
  }
};

const startGame = (typeOfGame) => {
  welcome();
  const name = getName();
  greeting(name);
  playGameByType(name, typeOfGame);
};

export default startGame;
