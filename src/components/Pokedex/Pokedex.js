/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchPokemon } from "../../redux/data/dataUtils";

import { Pagination } from "../Pagination";
import { PokemonBoard } from "../PokemonBoard/PokemonBoard";
import { Search } from "../Search";

export const Pokedex = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  return (
    <div>
      <Search />
      <PokemonBoard />
      <Pagination />
    </div>
  );
};
