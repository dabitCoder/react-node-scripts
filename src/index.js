#!/usr/bin/env node
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

import { askForSelection } from '../lib/inquirer';
import { generateComponentTest } from './scripts/components';
import { generateConnectorTest } from './scripts/connector';

clear();
console.log(
  chalk.red(figlet.textSync('RED POINTS', { horizontalLayout: 'full' }))
);

const run = async () => {
  const { type } = await askForSelection();
  switch (type) {
    case 'Test for a component':
      await generateComponentTest();
      break;
    case 'Test for a connector':
      await generateConnectorTest();
      break;
  }
};

run();
