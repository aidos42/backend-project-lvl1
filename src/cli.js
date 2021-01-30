import readlineSync from 'readline-sync';
import playGameCalc from './games/calc.js';
import playGameEven from './games/even.js';
import playGameGcd from './games/gcd.js';
import playGamePrime from './games/prime.js';
import playGameProgression from './games/progression.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Please, choose a game to play: ');
  console.log('1. Calculation;');
  console.log('2. Guess even number;');
  console.log('3. Find the greatest common divider;');
  console.log('4. Guess is it prime number;');
  console.log('5. Find the missing number;');

  const game = readlineSync.question('Please, type an ordinal number of game: ');

  switch (game) {
    case '1':
      playGameCalc();
      break;
    case '2':
      playGameEven();
      break;
    case '3':
      playGameGcd();
      break;
    case '4':
      playGamePrime();
      break;
    case '5':
      playGameProgression();
      break;
    default:
      console.log('You typed wrong number.');
  }
};
