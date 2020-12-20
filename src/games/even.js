import readlineSync from 'readline-sync';

const isAnswerCorrect = (randomNumber, answer) => {
  if (randomNumber % 2 === 0 && answer === 'yes') {
    return true;
  }
  if (randomNumber % 2 !== 0 && answer === 'no') {
    return true;
  }
  if (randomNumber % 2 === 0 && answer === 'no') {
    return false;
  }
  return false;
};

const getCorrectAnswer = (randomNumber) => {
  if (randomNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const playGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 1;
  do {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (isAnswerCorrect(randomNumber, answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(randomNumber)}'.\nLet's try again, ${name}`);
      return;
    }
    i += 1;
  } while (i <= 3);
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
