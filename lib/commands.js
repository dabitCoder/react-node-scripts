import commander from 'commander';
import { run } from '../src/index';

commander.version('0.0.1').description('Red Points react-node-scripts');
commander
  .command('run')
  .alias('r')
  .description('Executes the prompter to generate files')
  .action(run);

commander.parse(process.argv);
