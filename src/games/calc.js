import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

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

const playGame = (name) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const operation = getRandomOperation();
    console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const expectedAnswer = getCorrectAnswer(firstNumber, secondNumber, operation);
    if (expectedAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
