import readlineSync from 'readline-sync';
import getRandomNumber from '../utilities.js';
import isAnswerCorrect from '../isAnswerCorrect.js';

const THE_FIRST_PRIME_NUMBER = 2;
const THE_FIRST_500_PRIME_NUMBERS_CAP = 3571;

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(THE_FIRST_PRIME_NUMBER, THE_FIRST_500_PRIME_NUMBERS_CAP);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const expectedAnswer = isPrime(number) ? 'yes' : 'no';
    if (!isAnswerCorrect(expectedAnswer, answer, name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
