import getRandomNumber from '../utilities.js';
import { startGame, numberOfRounds } from '../index.js';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;
const firstElement = 0;

const generateProgression = (step) => {
  const progression = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    const number = firstElement + (i * step);
    progression.push(number);
  }

  return progression;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const step = getRandomNumber(1, 10);
    const progression = generateProgression(step);

    const indexToChange = getRandomNumber(0, progression.length);
    const deletedNumber = progression[indexToChange];
    progression[indexToChange] = '..';

    const question = progression.join(' ');
    const answer = String(deletedNumber);

    gameData.push([question, answer]);
  }

  startGame(rule, gameData);
};
