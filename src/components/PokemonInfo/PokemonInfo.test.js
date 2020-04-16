import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";

import { PokemonInfo } from "./index";

import { pokemonData } from "../../mock";

const data = {
  pokemonStats: pokemonData,
  imgPath:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  name: "bulbasaur",
  pokemonType: "poison",
};

afterEach(cleanup);

describe("PokemoInfo", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PokemonInfo data={data} />, div);
  });
});

it("renders all elements", () => {
  const { getByTestId } = render(<PokemonInfo data={data} />);
  expect(getByTestId("main-info").children.length).toBe(7);
});

it("renders image", () => {
  const { getByTestId } = render(<PokemonInfo data={data} />);
  expect(getByTestId("pokemon-image")).toBeTruthy();
});
