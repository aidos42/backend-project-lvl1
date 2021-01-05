import readlineSync from 'readline-sync';

const isAnswerCorrect = (expectedAnswer, answer, name) => {
  if (expectedAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`);
    return false;
  }
  return true;
};

const playGame = (rule, questions, expectedAnswers, name) => {
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if (!isAnswerCorrect(expectedAnswers[i], answer, name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const startGame = (rule, questions, expectedAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  playGame(rule, questions, expectedAnswers, name);
};

export default startGame;
