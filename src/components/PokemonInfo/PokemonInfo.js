import React from "react";

import { statsData } from "../../utils";

import { PokemonStats } from "../PokemonStats";

export const PokemonInfo = ({ data: { name, pokemonStats, imgPath } }) => {
  return (
    <div className="pokemon-modal__main-info">
      {statsData.map(([icon, text, position = "left", types = false]) => (
        <PokemonStats
          key={name + pokemonStats[text]}
          text={pokemonStats[text]}
          icon={icon}
          position={position}
        />
      ))}
      <img src={imgPath} alt={`pokemon ${name}`} />
    </div>
  );
};
