import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "react-testing-library";
import COMPONENT_NAME from "../COMPONENT_NAME";
import store from "../../../../store/__mocks__/mockStore";

describe("%COMPONENT_NAME% test suite", () => {
  const component = (
    <Provider store={store}>
      <COMPONENT_NAME />
    </Provider>
  );

  const setup = () => render(component);

  beforeEach(() => {});
  afterEach(cleanup);

  it("Should render correctly", () => {
    const div = document.createElement("div");
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should match snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
