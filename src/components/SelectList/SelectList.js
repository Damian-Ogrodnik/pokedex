import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";

import { fetchPokemon } from "../../redux/data/dataUtils";
import { pokemonTypes, customSelectStyles } from "../../utils";

export const SelectList = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    value === "all"
      ? dispatch(fetchPokemon())
      : dispatch(fetchPokemon(`https://pokeapi.co/api/v2/type/${value}`, true));
  };

  return (
    <Select
      onChange={({ value }) => handleChange(value)}
      options={pokemonTypes}
      styles={customSelectStyles}
      placeholder={"Pokemon"}
      className={"select-list"}
    />
  );
};
