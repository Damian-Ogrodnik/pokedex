import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";

import { PokemonStats } from "./index";

import weightIcon from "../../assets/weight.png";

afterEach(cleanup);

describe("PokemonStats", () => {
  const pokemonData = { icon: weightIcon, pokemonType: "grass", text: 20 };
  const pokemonData2 = {
    icon: weightIcon,
    pokemonType: "grass",
    text: [{ type: { name: "grass" } }, { type: { name: "fire" } }],
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PokemonStats />, div);
  });
  it("renders all elements", () => {
    const { getByTestId } = render(
      <PokemonStats
        icon={weightIcon}
        pokemonType={pokemonData.pokemonType}
        text={pokemonData.text}
      />
    );
    expect(getByTestId("pokemon-modal").children.length).toBe(2);
  });
  it("renders proper values", () => {
    const { getByTestId } = render(
      <PokemonStats
        icon={weightIcon}
        pokemonType={pokemonData.pokemonType}
        text={pokemonData.text}
      />
    );
    expect(getByTestId("text").textContent).toBe(pokemonData.text.toString());
  });
  it("renders proper pokemon types when recived", () => {
    const { getByText } = render(
      <PokemonStats
        icon={weightIcon}
        pokemonType={pokemonData2.pokemonType}
        text={pokemonData2.text}
      />
    );
    expect(getByText(pokemonData2.text[0].type.name).textContent).toBe(
      pokemonData2.text[0].type.name
    );
    expect(getByText(pokemonData2.text[1].type.name).textContent).toBe(
      pokemonData2.text[1].type.name
    );
  });
});
