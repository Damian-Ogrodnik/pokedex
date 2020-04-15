import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { render, cleanup } from "@testing-library/react";

import { Header } from "./index";

const mockStore = configureStore([thunk]);
const initialState = {
  data: {
    pokemon: [],
    filteredPokemon: [],
    loading: true,
    error: null,
  },
};

const store = mockStore(initialState);

afterEach(cleanup);

describe("Header", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Header />{" "}
      </Provider>,
      div
    );
  });
  it("renders img", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Header />{" "}
      </Provider>
    );
    expect(getByTestId("img")).toBeTruthy();
  });
  it("renders all elements", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Header />{" "}
      </Provider>
    );
    expect(getByTestId("header").children.length).toBe(2);
  });
});
