import getRandomNumber from '../utilities.js';
import { startGame, numberOfRounds } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }

  return getGCD(b, a % b);
};

export default () => {
  const gameData = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionAndAnswer = [];
    const a = getRandomNumber();
    const b = getRandomNumber();
    questionAndAnswer[0] = `${a} ${b}`;
    questionAndAnswer[1] = String(getGCD(a, b));
    gameData[i] = questionAndAnswer;
  }

  startGame(rule, gameData);
};
