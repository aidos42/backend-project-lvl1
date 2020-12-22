export default (expectedAnswer, answer, name) => {
  if (expectedAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`);
    return false;
  }
  return true;
};
