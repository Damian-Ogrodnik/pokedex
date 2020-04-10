import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPokemon, filterPokemon } from "../../redux/data/dataUtils";
import { pokemonTypes } from "../../utils";

export const Search = () => {
  const [value, setValue] = useState("");
  const pokemon = useSelector(({ data }) => data.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterPokemon(value, pokemon));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  const handleSubmit = async (e) => {
    dispatch(filterPokemon(value, pokemon));
    e.preventDefault();
  };

  const handleChange = (value) => {
    value === "all"
      ? dispatch(fetchPokemon())
      : dispatch(fetchPokemon(`https://pokeapi.co/api/v2/type/${value}`, true));
  };

  return (
    <div className="search">
      <form onSubmit={(e) => handleSubmit(e)}>
        <select
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Select pokemon"
          className="search__types"
        >
          {pokemonTypes.map((pokemonType) => (
            <option key={pokemonType} value={pokemonType}>
              {pokemonType}
            </option>
          ))}
        </select>
        <input
          className="search__input"
          type="input"
          placeholder="Search by Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};
