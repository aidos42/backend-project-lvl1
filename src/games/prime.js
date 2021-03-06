import getRandomNumber from '../utilities.js';
import { startGame, numberOfRounds } from '../index.js';

const THE_FIRST_PRIME_NUMBER = 2;
const THE_FIRST_500_PRIME_NUMBERS_CAP = 3571; // небольшое число, для удобства игрока.
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomNumber(THE_FIRST_PRIME_NUMBER, THE_FIRST_500_PRIME_NUMBERS_CAP);
    const answer = isPrime(question) ? 'yes' : 'no';

    gameData.push([question, answer]);
  }

  startGame(rule, gameData);
};
