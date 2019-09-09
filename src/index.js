#!/usr/bin/env node
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

import { askForSelection } from '../lib/prompter';
import { promptQuestionsForComponent } from './scripts/componentTestGenerator';
import { promptQuestionsForScaffolding } from './scripts/scaffoldingGenerator';


clear();
console.log(
  chalk.red(figlet.textSync('RED POINTS', { horizontalLayout: 'full' }))
);

export const run = async () => {
  const { type } = await askForSelection();
  switch (type) {
    case 'Test for a component':
      await promptQuestionsForComponent();
      break;
    case 'Scaffolding for a new screen':
      await promptQuestionsForScaffolding();
      break;
    default:
      break;
  }
};

run();
