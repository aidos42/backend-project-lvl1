import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const playGameEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const expectedAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    questions[i] = getRandomNumber();
    expectedAnswers[i] = isEven(questions[i]) ? 'yes' : 'no';
  }
  startGame(rule, questions, expectedAnswers);
};

export default playGameEven;
