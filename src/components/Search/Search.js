import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterPokemon } from "../../redux/data/dataUtils";

export const Search = () => {
  const [value, setValue] = useState("");
  const pokemon = useSelector((store) => store.data.pokemon);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(filterPokemon(value, pokemon));
    e.preventDefault();
  };

  return (
    <div className="search">
      <form onSubmit={(e) => handleSubmit(e)}>
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
