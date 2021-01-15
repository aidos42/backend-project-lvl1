import getRandomNumber from '../utilities.js';
import { startGame, numberOfRounds } from '../index.js';

const rule = 'What number is missing in the progression?';

const getProgression = () => {
  const progression = [];
  const seed = getRandomNumber(1, 10);
  const progressionLength = 10;

  for (let i = 1; i <= progressionLength; i += 1) {
    const number = i * seed;
    progression.push(number);
  }

  return progression;
};

const setDeletedNumber = (progression) => {
  const progressionTemp = progression; // линтер ругается на изменение аргумента
  const indexToChange = getRandomNumber(0, progressionTemp.length);
  const deletedNumber = progressionTemp[indexToChange];
  progressionTemp[indexToChange] = '..';

  return deletedNumber;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionAndAnswer = [];

    const progression = getProgression();
    const deletedNumber = setDeletedNumber(progression);
    const question = progression.join(' ');
    questionAndAnswer.push(question);
    const answer = String(deletedNumber);
    questionAndAnswer.push(answer);

    gameData[i] = questionAndAnswer;
  }

  startGame(rule, gameData);
};
