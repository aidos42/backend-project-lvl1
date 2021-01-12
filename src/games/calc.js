import getRandomNumber from '../utilities.js';
import { startGame, numberOfRounds } from '../index.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Invalid operation: ${operation}`);
  }
};

export default () => {
  const gameData = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionAndAnswer = [];
    const a = getRandomNumber();
    const b = getRandomNumber();
    const operation = operations[getRandomNumber(0, operations.length)];
    questionAndAnswer[0] = `${a} ${operation} ${b}`;
    questionAndAnswer[1] = String(calculate(a, b, operation));
    gameData[i] = questionAndAnswer;
  }

  startGame(rule, gameData);
};
