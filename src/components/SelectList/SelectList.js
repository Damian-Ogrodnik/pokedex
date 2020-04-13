import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";

import { fetchPokemon } from "../../redux/data/dataUtils";
import { customSelectStyles, pokemonTypes } from "../../utils";

export const SelectList = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    value === "all"
      ? dispatch(fetchPokemon())
      : dispatch(fetchPokemon(`https://pokeapi.co/api/v2/type/${value}`, true));
  };

  return (
    <Select
      className={"select-list"}
      onChange={({ value }) => handleChange(value)}
      options={pokemonTypes}
      placeholder={"Pokemon"}
      styles={customSelectStyles}
    />
  );
};
