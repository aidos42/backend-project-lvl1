import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const getGCD = (numOne, numTwo) => {
  if (!numTwo) {
    return numOne;
  }
  return getGCD(numTwo, numOne % numTwo);
};

const playGameGcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const expectedAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const numOne = getRandomNumber();
    const numTwo = getRandomNumber();
    questions[i] = `${numOne} ${numTwo}`;
    expectedAnswers[i] = String(getGCD(numOne, numTwo));
  }
  startGame(rule, questions, expectedAnswers);
};

export default playGameGcd;
