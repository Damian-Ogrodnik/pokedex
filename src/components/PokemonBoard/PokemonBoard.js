import React from "react";
import { useSelector } from "react-redux";

import pikachuImg from "../../assets/pikachu.png";

import { PokemonCard } from "../PokemonCard";
import { Information } from "../Information";

export const PokemonBoard = () => {
  const loading = useSelector((store) => store.data.loading);
  const paginatedPokemonArray = useSelector(
    ({ pagination }) => pagination.paginatedPokemon
  );

  return (
    <div className="pokemon-board">
      {paginatedPokemonArray.length ? (
        paginatedPokemonArray.map(({ name, url }) => (
          <PokemonCard key={name} name={name} url={url} />
        ))
      ) : !loading ? (
        <Information
          text="Nothing Found..."
          secondText={"Try to search another name :) "}
          imgPath={pikachuImg}
        />
      ) : null}
    </div>
  );
};
