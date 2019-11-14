#!/usr/bin/env node
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

import { askForSelection } from '../lib/prompter';
import { promptQuestionsForComponent } from './scripts/components';
import { promptQuestionsForConnectorTest, generateNewConnector } from './scripts/connector';

clear();
console.log(
  chalk.red(figlet.textSync('RED POINTS', { horizontalLayout: 'full' }))
);

const run = async () => {
  const { type } = await askForSelection();
  switch (type) {
    case 'Test for a component':
      await promptQuestionsForComponent();
      break;
    case 'Test for a connector':
      await promptQuestionsForConnectorTest();
      break;

    case 'New connector':
      generateNewConnector();
      break;
    default:
      break;
  }
};

run();
