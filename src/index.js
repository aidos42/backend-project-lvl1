import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

export const startGame = (rule, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${gameData[i][0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (gameData[i][1] === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gameData[i][1]}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
