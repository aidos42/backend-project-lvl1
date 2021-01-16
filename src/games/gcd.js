import getRandomNumber from '../utilities.js';
import { startGame, numberOfRounds } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => ((b === 0) ? a : getGCD(b, a % b));

export default () => {
  const gameData = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const a = getRandomNumber();
    const b = getRandomNumber();

    const question = `${a} ${b}`;
    const answer = String(getGCD(a, b));

    gameData.push([question, answer]);
  }

  startGame(rule, gameData);
};
