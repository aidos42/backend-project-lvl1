import getRandomNumber from '../utilities.js';
import { startGame, numberOfRounds } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  const GCD = (b === 0) ? a : getGCD(b, a % b);

  return GCD;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionAndAnswer = [];

    const a = getRandomNumber();
    const b = getRandomNumber();
    const question = `${a} ${b}`;
    questionAndAnswer.push(question);
    const answer = String(getGCD(a, b));
    questionAndAnswer.push(answer);

    gameData[i] = questionAndAnswer;
  }

  startGame(rule, gameData);
};
