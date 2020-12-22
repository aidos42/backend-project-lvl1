import readlineSync from 'readline-sync';
import getRandomNumber from '../utilities.js';
import isAnswerCorrect from '../isAnswerCorrect.js';

const getProgression = (seed) => {
  const result = [];
  for (let i = 1; i <= 10; i += 1) {
    const number = i * seed;
    result.push(number);
  }
  return result;
};

const getQuestionAndAnswer = (progression) => { // недостаточно абстракции?
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

const playGame = (name) => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const seed = getRandomNumber(1, 10);
    const progression = getProgression(seed);
    const questionAndAnswer = getQuestionAndAnswer(progression);
    const question = questionAndAnswer[0].join(' ');
    console.log(`Question: ${question}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const expectedAnswer = questionAndAnswer[1];
    if (!isAnswerCorrect(expectedAnswer, answer, name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
