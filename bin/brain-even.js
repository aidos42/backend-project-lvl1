#!/usr/bin/env node

import { welcome, getName, greeting } from '../src/greeting.js';
import playGame from '../src/even.js';

welcome();
const name = getName();
greeting(name);
playGame(name);
