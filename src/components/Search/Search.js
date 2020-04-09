import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPokemon, filterPokemon } from "../../redux/data/dataUtils";
import { pokemonTypes } from "../../utils";

export const Search = () => {
  const [value, setValue] = useState("");
  const [type, setType] = useState("all");
  const pokemon = useSelector(({ data }) => data.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterPokemon(value, pokemon));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  const handleSubmit = async (e) => {
    if (type !== "all") {
      dispatch(fetchPokemon(`https://pokeapi.co/api/v2/type/${type}`, true));
      dispatch(filterPokemon(value, pokemon));
    } else {
      dispatch(filterPokemon(value, pokemon));
    }
    e.preventDefault();
  };

  return (
    <div className="search">
      <form onSubmit={(e) => handleSubmit(e)}>
        <select
          onChange={(e) => setType(e.target.value)}
          placeholder="Select pokemon"
          className="search__types"
        >
          <option value="all">All</option>
          {pokemonTypes.map((type) => (
            <option key={type} value={type}>
              {type}
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
