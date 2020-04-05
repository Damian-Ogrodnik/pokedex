/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPokemon } from "../../redux/data/dataUtils";

import { Pagination } from "../Pagination";
import { PokemonBoard } from "../PokemonBoard/PokemonBoard";
import { Search } from "../Search";

export const Pokedex = () => {
  const pokemonArray = useSelector((store) => store.data.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  return (
    <div className="pokedex">
      <Search />
      <PokemonBoard />
      <Pagination pokemonArray={pokemonArray} />
    </div>
  );
};
