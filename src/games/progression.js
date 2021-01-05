import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const getProgression = (seed) => {
  const result = [];
  for (let i = 1; i <= 10; i += 1) {
    const number = i * seed;
    result.push(number);
  }
  return result;
};

const getQuestionAndAnswer = (progression) => {
  const indexToChange = getRandomNumber(1, 10);
  const resultProgression = [];
  const resultNumber = progression[indexToChange];
  for (let i = 0; i < progression.length; i += 1) {
    if (i === indexToChange) {
      resultProgression.push('..');
    } else {
      resultProgression.push(progression[i]);
    }
  }
  return [resultProgression, resultNumber];
};

const playGameProgression = () => {
  const rule = 'What number is missing in the progression?';
  const questions = [];
  const expectedAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const seed = getRandomNumber(1, 10);
    const progression = getProgression(seed);
    const questionAndAnswer = getQuestionAndAnswer(progression);
    questions[i] = questionAndAnswer[0].join(' ');
    expectedAnswers[i] = String(questionAndAnswer[1]);
  }
  startGame(rule, questions, expectedAnswers);
};

export default playGameProgression;
