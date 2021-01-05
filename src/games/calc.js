import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomNumber(0, operations.length)];
};

const getCorrectAnswer = (firstNumber, secondNumber, operation) => {
  if (operation === '+') {
    return firstNumber + secondNumber;
  }
  if (operation === '-') {
    return firstNumber - secondNumber;
  }
  return firstNumber * secondNumber;
};

const playGameCalc = () => {
  const rule = 'What is the result of the expression?';
  const questions = [];
  const expectedAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const operation = getRandomOperation();
    questions[i] = `${firstNumber} ${operation} ${secondNumber}`;
    expectedAnswers[i] = String(getCorrectAnswer(firstNumber, secondNumber, operation));
  }
  startGame(rule, questions, expectedAnswers);
};

export default playGameCalc;
