import React from "react";
import { useSelector } from "react-redux";

import pikachuImg from "../../assets/pikachu.png";

import { Information } from "../Information";
import { PokemonCard } from "../PokemonCard";

export const PokemonBoard = () => {
  const paginatedPokemonArray = useSelector(
    ({ pagination }) => pagination.paginatedPokemon
  );

  return (
    <div className="pokemon-board">
      {paginatedPokemonArray.length ? (
        paginatedPokemonArray.map(({ name, url }) => (
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
