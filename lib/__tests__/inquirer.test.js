import inquirer from 'inquirer';
import {
  askForName,
  askForParameters,
  askForActions,
  askForConnectorMethod,
  askForConnectorTestType,
  askForReducers,
  askForRedux,
  askForSelection,
} from '../prompter';

describe('Inquirer Test suite', () => {
  jest.mock('inquirer');

  it('askForName - Should return a name when user is prompted for one', async () => {
    inquirer.prompt = jest.fn().mockReturnValue({ name: 'test naming' });
    const actual = askForName();
    expect(actual).toEqual({ name: 'test naming' });
  });

  it('askForSelection - Should return the selection that user has selected', () => {
    inquirer.prompt = jest
      .fn()
      .mockReturnValue({ selection: 'Test for component' });
    const actual = askForSelection();
    expect(actual).toEqual({ selection: 'Test for component' });
  });

  it('askForParameters - Should return the parameters that user has specified', () => {
    inquirer.prompt = jest.fn().mockReturnValue({
      connector_method_parameters: ['context', 'id', 'full'],
    });
    const actual = askForParameters();
    expect(actual).toEqual({
      connector_method_parameters: ['context', 'id', 'full'],
    });
  });

  it('askForActions - Should return the actions direction that user has specified', () => {
    inquirer.prompt = jest.fn().mockReturnValue({
      redux_actions: '../../test/testing/testingMoreTesting',
    });
    const actual = askForActions();
    expect(actual).toEqual({
      redux_actions: '../../test/testing/testingMoreTesting',
    });
  });

  it('askForReducers - Should return te reducers direction that user has specified', () => {
    inquirer.prompt = jest.fn().mockReturnValue({
      redux_reducers: '../../test/testing/testingMoreTesting',
    });
    const actual = askForReducers();
    expect(actual).toEqual({
      redux_reducers: '../../test/testing/testingMoreTesting',
    });
  });

  it('askForConnectorMethod - Should return the name of the connector method to test', () => {
    inquirer.prompt = jest
      .fn()
      .mockReturnValue({ connector_method: 'MyConnectorMethod' });
    const actual = askForConnectorMethod();
    expect(actual).toEqual({ connector_method: 'MyConnectorMethod' });
  });

  it('askForRedux - Should return a boolean if redux is present or not', () => {
    inquirer.prompt = jest.fn().mockReturnValue({ isReduxActive: true });
    const actual = askForRedux();
    expect(actual).toEqual({ isReduxActive: true });
  });

  it('askForConnectorTestType - Should return the user selection of the user', () => {
    inquirer.prompt = jest
      .fn()
      .mockReturnValue({ connector_test_type: 'SpecReadOnly.js' });
    const actual = askForConnectorTestType();
    expect(actual).toEqual({ connector_test_type: 'SpecReadOnly.js' });
  });
});
