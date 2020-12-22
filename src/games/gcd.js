import readlineSync from 'readline-sync';
import getRandomNumber from '../utilities.js';
import isAnswerCorrect from '../isAnswerCorrect.js';

const getGCD = (numOne, numTwo) => {
  let a = numOne;
  let b = numTwo;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a === 0 ? b : a;
};

const playGame = (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const numOne = getRandomNumber();
    const numTwo = getRandomNumber();
    console.log(`Question: ${numOne} ${numTwo}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const expectedAnswer = getGCD(numOne, numTwo);
    if (!isAnswerCorrect(expectedAnswer, answer, name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
