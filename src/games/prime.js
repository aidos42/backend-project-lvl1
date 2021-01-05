import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

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

const playGamePrime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = [];
  const expectedAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    questions[i] = getRandomNumber(THE_FIRST_PRIME_NUMBER, THE_FIRST_500_PRIME_NUMBERS_CAP);
    expectedAnswers[i] = isPrime(questions[i]) ? 'yes' : 'no';
  }
  startGame(rule, questions, expectedAnswers);
};

export default playGamePrime;
