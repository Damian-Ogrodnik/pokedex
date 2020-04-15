/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPokemon } from "../../redux/data/dataUtils";

import { Header } from "../Header";
import { Pagination } from "../Pagination";
import { PokemonBoard } from "../PokemonBoard";

export const Pokedex = () => {
  const { error, loading, pokemonArray, filteredPokemon } = useSelector(
    ({ data }) => data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  return (
    <div className="pokedex">
      <Header />
      <PokemonBoard error={error} loading={loading} />
      <Pagination
        loading={loading}
        pokemonArray={filteredPokemon ? filteredPokemon : pokemonArray}
      />
    </div>
  );
};
