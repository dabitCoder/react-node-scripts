import {
  %REDUCER%_CLEAR,
  %REDUCER%_FETCH_DATA_ERROR,
  %REDUCER%_FETCH_DATA_FAILURE,
  %REDUCER%_FETCH_DATA_REQUEST,
  %REDUCER%_FETCH_DATA_SUCCESS,
} from '../../../../actions/actionTypes';

import reducer from '../data';

const defaultState = {
  isLoading: false,
  response: null,
};

describe('%REDUCER% reducer test suite', () => {
  it('Action: %REDUCER%_FETCH_DATA_ERROR', () => {
    const action = {
      type: %REDUCER%_FETCH_DATA_ERROR,
    };
    const initialState = defaultState;
    const expectedState = {
      ...defaultState,
      isLoading: false,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: %REDUCER%_FETCH_DATA_FAILURE', () => {
    const action = {
      type: %REDUCER%_FETCH_DATA_FAILURE,
    };
    const initialState = defaultState;
    const expectedState = {
      ...defaultState,
      isLoading: false,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: %REDUCER%_FETCH_DATA_REQUEST', () => {
    const action = {
      type: %REDUCER%_FETCH_DATA_REQUEST,
    };
    const initialState = defaultState;
    const expectedState = { ...defaultState, isLoading: true };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: %REDUCER%_FETCH_DATA_SUCCESS with response', () => {
    const response = { info: 'test' };
    const action = {
      type: %REDUCER%_FETCH_DATA_SUCCESS,
      payload: { response },
    };
    const initialState = defaultState;
    const expectedState = { response, isLoading: false };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: %REDUCER%_FETCH_DATA_SUCCESS without response', () => {
    const response = null;
    const action = {
      type: %REDUCER%_FETCH_DATA_SUCCESS,
      payload: { response },
    };
    const initialState = defaultState;
    const expectedState = { ...defaultState, isLoading: false };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: %REDUCER%_CLEAR', () => {
    const action = {
      type: %REDUCER%_CLEAR,
    };
    const initialState = {
      isLoading: true,
      response: {
        test: 'something',
      },
    };
    const expectedState = { ...defaultState };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: default', () => {
    const action = { type: 'default' };
    const initialState = defaultState;
    const expectedState = defaultState;
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});