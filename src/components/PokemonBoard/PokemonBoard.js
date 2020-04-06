import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { paginatePokemon } from "../../redux/pagination/paginationUtils";
import { PokemonCard } from "../PokemonCard";

export const PokemonBoard = () => {
  const pokemonArray = useSelector((store) => store.data.pokemon);
  const filteredPokemonArray = useSelector(
    (store) => store.data.filteredPokemon
  );
  const paginatedPokemonArray = useSelector(
    (store) => store.pagination.paginatedPokemon
  );
  const dispatch = useDispatch();

  useEffect(() => {
    filteredPokemonArray
      ? dispatch(paginatePokemon(1, filteredPokemonArray))
      : dispatch(paginatePokemon(1, pokemonArray));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonArray, filteredPokemonArray]);

  return (
    <div className="pokemon-board">
      {paginatedPokemonArray.map(({ ...props }) => (
        <PokemonCard {...props} />
      ))}
    </div>
  );
};
