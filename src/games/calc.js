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
    const a = getRandomNumber();
    const b = getRandomNumber();
    const operation = operations[getRandomNumber(0, operations.length)];

    const question = `${a} ${operation} ${b}`;
    const answer = String(calculate(a, b, operation));

    gameData.push([question, answer]);
  }

  startGame(rule, gameData);
};
