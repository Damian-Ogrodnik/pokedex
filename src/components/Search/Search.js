import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterPokemon } from "../../redux/data/dataUtils";
import { SelectList } from "../SelectList";

export const Search = () => {
  const [value, setValue] = useState("");
  const { pokemon } = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterPokemon(value, pokemon));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  const handleSubmit = async (e) => {
    dispatch(filterPokemon(value, pokemon));
    e.preventDefault();
  };

  return (
    <div className="search">
      <SelectList />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search__input"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          type="input"
          value={value}
        />
      </form>
    </div>
  );
};
