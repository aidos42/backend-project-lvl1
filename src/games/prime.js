import readlineSync from 'readline-sync';
import getRandomNumber from '../utilities.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i) {
      return false;
    }
  }
  return true;
};

const playGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(0, 500);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const expectedAnswer = isPrime(number) ? 'yes' : 'no';
    if (expectedAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
