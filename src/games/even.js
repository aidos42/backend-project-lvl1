import getRandomNumber from '../utilities.js';
import { startGame, numberOfRounds } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export default () => {
  const gameData = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomNumber();
    const answer = isEven(question) ? 'yes' : 'no';

    gameData.push([question, answer]);
  }

  startGame(rule, gameData);
};
