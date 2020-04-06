/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPokemon } from "../../redux/data/dataUtils";

import { Header } from "../Header";
import { Pagination } from "../Pagination";
import { PokemonBoard } from "../PokemonBoard/PokemonBoard";

export const Pokedex = () => {
  const pokemonArray = useSelector((store) => store.data.pokemon);
  const pokemonFilteredArray = useSelector(
    (store) => store.data.filteredPokemon
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  return (
    <div className="pokedex">
      <Header />
      <PokemonBoard />
      <Pagination
        pokemonArray={
          pokemonFilteredArray ? pokemonFilteredArray : pokemonArray
        }
      />
    </div>
  );
};
