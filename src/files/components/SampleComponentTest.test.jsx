import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from 'react-testing-library';
import store from '../../../../store/__mocks__/mockStore';

import {} from 'Actions';
import {} from 'Reducer';

import SampleComponentTest from '../SampleComponentTest';

describe('SampleComponentTest test suite', () => {
  const component = (
    <Provider store={store}>
      <SampleComponentTest />
    </Provider>
  );

  const setup = () => render(component);

  beforeEach(() => {});
  afterEach(cleanup);

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
