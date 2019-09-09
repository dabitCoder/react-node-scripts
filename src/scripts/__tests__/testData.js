export const testActions = `import {
  actions,
} from '../../../actions/something';
`;

export const testSelectors = `
import {
  something
} from '../../../something';
`;

export const testWithoutRedux = `
import React from 'react';
import ReactDOM from 'react-dom';

import { render } from 'react-testing-library';
describe('Hola test suite', () => {
const component = <Hola/>
const setup = () => render(component);

it('Should render correctly', () => {
const div = document.createElement('div');
ReactDOM.render(component, div);
ReactDOM.unmountComponentAtNode(div);
});

it('Should match snapshot', () => {
const { container } = setup();
expect(container).toMatchSnapshot();
});

});

`;

export const expectedTestToBeGenerated = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';

import store from '../../../../store/__mocks__/mockStore';

import {
} from '../../../../actions';

import {
} from '../../../../reducers';

import hola from '../hola';

jest.mock('../../../../actions/something');
jest.mock('../../../../reducers/something');

describe('hola test suite', () => {
  const component = (
    <Provider store={store}>
      <hola />
    </Provider>
  );

  const setup = () => render(component);

  beforeEach(() => {
  });
  
  it('Should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
`;

export const expectedTestWithActions = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';

import store from '../../../../store/__mocks__/mockStore';

import {
} from '../../../../actions/';

import hola from '../hola';

jest.mock('../../../../actions');

describe('hola test suite', () => {
  const component = (
    <Provider store={store}>
      <hola />
    </Provider>
  );

  const setup = () => render(component);

  beforeEach(() => {
  });
  

  it('Should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
`;

export const expectedTestWithSelectors = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';

import store from '../../../../store/__mocks__/mockStore';

import {
} from '../../../../reducers/';

import hola from '../hola';

jest.mock('../../../../reducers');

describe('hola test suite', () => {
  const component = (
    <Provider store={store}>
      <hola />
    </Provider>
  );

  const setup = () => render(component);

  beforeEach(() => {
  });
  
  it('Should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
`;

export const expectedSelectorTestResponse = {
  component_name: 'Hola',
  component_parent_dir: '/pages',
  isReduxActive: true,
  selectorsArray: [
  ],
  selectorsForComponent:'',
  selectorsRoute: "'../../../../reducers/'",
};

export const expectedActionTestResponse = {
  actionsArray: [
  ],
  actionsForComponent:
    '',
  actionsRoute: "'../../../../actions/'",
  component_name: 'Hola',
  component_parent_dir: '/pages',
  isReduxActive: true,
};

export const expectedFullReduxTestResponse = {
  actionsArray: [
  ],
  actionsForComponent:
    '',
  actionsRoute: "'../../../../actions'",
  component_name: 'Hola',
  component_parent_dir: '/pages',
  isReduxActive: true,
  selectorsArray: [
  ],
  selectorsForComponent:
    '',
  selectorsRoute: "'../../../../reducers'",
};
