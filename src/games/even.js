import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const isEven = (number) => number % 2 === 0;

const playGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
    if (expectedAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
