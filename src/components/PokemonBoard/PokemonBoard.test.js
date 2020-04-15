import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { render, cleanup } from "@testing-library/react";

import { PokemonBoard } from "./index";

const mockStore = configureStore([thunk]);

const initialState = {
  pagination: {
    paginatedPokemon: [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
      },
      {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
      },
    ],
  },
};
const initialState2 = {
  pagination: {
    paginatedPokemon: [],
  },
};

const store = mockStore(initialState);
const store2 = mockStore(initialState2);

afterEach(cleanup);

describe("PokemonBoard", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <PokemonBoard />
      </Provider>,
      div
    );
  });
  it("renders proper numer of cards", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <PokemonBoard />
      </Provider>
    );
    expect(getByTestId("pokemon-board").children.length).toBe(3);
  });
  it("renders information when pokemon array is empty", () => {
    const { getByText, container } = render(
      <Provider store={store2}>
        <PokemonBoard />
      </Provider>
    );
    expect(getByText("Nothing Found...").textContent).toBeTruthy();
    expect(container.querySelector(".information")).toBeTruthy();
  });
});
