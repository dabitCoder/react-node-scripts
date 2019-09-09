import inquirer from 'inquirer';
import {
  expectedActionTestResponse,
  expectedFullReduxTestResponse,
  expectedSelectorTestResponse,
  testActions,
  testSelectors,
} from './testData';

import { askForReduxImports } from '../componentTestGenerator';

jest.mock('inquirer');

describe('componentTestGenerator test suite', () => {
  describe('askForReduxImports', () => {
    const reduxActiveDataObject = {
      component_name: 'Hola',
      component_parent_dir: '/pages',
      isReduxActive: true,
    };

    it('Should return the same dataObject if redux is not active', async () => {
      const dataObject = {
        component_name: 'Hola',
        component_parent_dir: '/pages',
        isReduxActive: false,
      };

      inquirer.prompt = jest.fn().mockReturnValue({
        component_actions: null,
        component_selectors: null,
      });
      const actual = await askForReduxImports(dataObject, false);

      expect(actual).toEqual(dataObject);
    });

    it('Should return an object with actions processed if actions are provided', async () => {
      inquirer.prompt = jest.fn().mockReturnValue({
        component_actions: testActions,
      });

      const actual = await askForReduxImports(reduxActiveDataObject, true);
      expect(actual).toEqual(expectedActionTestResponse);
    });

    it('Should return an object with selectors processed if selectors are provided', async () => {
      inquirer.prompt = jest.fn().mockReturnValue({
        component_selectors: testSelectors,
      });

      const actual = await askForReduxImports(reduxActiveDataObject, true);
      expect(actual).toEqual(expectedSelectorTestResponse);
    });

    it('Should return an object with actions/selectors if both are provided', async () => {
      inquirer.prompt = jest.fn().mockReturnValue({
        component_actions: testActions,
        component_selectors: testSelectors,
      });

      const actual = await askForReduxImports(reduxActiveDataObject, true);
      expect(actual).toEqual(expectedFullReduxTestResponse);
    });
  });
});
