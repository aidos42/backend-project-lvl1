import readlineSync from 'readline-sync';
import getRandomNumber from '../utilities.js';

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
    console.log(`Question: ${questionAndAnswer[0].join(' ')}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === questionAndAnswer[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionAndAnswer[1]}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
