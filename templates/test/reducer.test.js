import {} from "../../../../actions/actionTypes";
import reducer from "../%REDUCER%";

describe("%REDUCER% test suite", () => {
  it("Action: NAME_OF_THE_ACTION", () => {
    const action = {
      type: NAME_OF_THE_ACTION
    };
    const initialState = yourInitialState;
    const expected = yourExpectedState;
    expect(reducer(initialState, action)).toEqual(expected);
  });

  it("Action: Default", () => {
    const action = {};
    const initialState = defaultState;
    const expected = defaultState;
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
