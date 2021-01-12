import getRandomNumber from '../utilities.js';
import { startGame, numberOfRounds } from '../index.js';

const rule = 'What number is missing in the progression?';

const getProgression = () => {
  const result = [];
  const seed = getRandomNumber(1, 10);

  for (let i = 1; i <= 10; i += 1) {
    const number = i * seed;
    result.push(number);
  }

  const indexToChange = getRandomNumber(0, 9);
  const resultNumber = result[indexToChange];
  result[indexToChange] = '..';

  return [result, resultNumber];
};

export default () => {
  const gameData = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionAndAnswer = [];
    const progression = getProgression();
    questionAndAnswer[0] = progression[0].join(' ');
    questionAndAnswer[1] = String(progression[1]);
    gameData[i] = questionAndAnswer;
  }

  startGame(rule, gameData);
};
