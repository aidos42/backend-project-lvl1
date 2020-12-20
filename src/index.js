import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

export const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * max) + min;
