import React from "react";
import { useSelector } from "react-redux";

import pikachuImg from "../../assets/pikachu.png";
import { withLoading } from "../withLoading";

import { Information } from "../Information";
import { PokemonCard } from "../PokemonCard";

const PokemonBoard = () => {
  const { paginatedPokemon } = useSelector(({ pagination }) => pagination);

  return (
    <div className="pokemon-board" data-testid="pokemon-board">
      {paginatedPokemon.length ? (
        paginatedPokemon.map(({ name, url }) => (
          <PokemonCard key={name} name={name} url={url} />
        ))
      ) : (
        <Information
          imgPath={pikachuImg}
          secondText={"Try to search another name :) "}
          text="Nothing Found..."
        />
      )}
    </div>
  );
};

const pokemonBoardWithLoading = withLoading(PokemonBoard);
export { pokemonBoardWithLoading as PokemonBoard };
