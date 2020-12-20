#!/usr/bin/env node

import { welcome, getName, greeting } from '../src/index.js';
import playGame from '../src/games/calc.js';

welcome();
const name = getName();
greeting(name);
playGame(name);
