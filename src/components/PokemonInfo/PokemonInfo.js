import React from "react";

import { statsData } from "../../utils";

import { PokemonStats } from "../PokemonStats";

export const PokemonInfo = ({ data: { name, pokemonStats, imgPath } }) => {
  return (
    <div className="pokemon-modal__main-info">
      {statsData.map(([icon, text, position = "left", types = false]) => {
        return (
          <PokemonStats
            text={pokemonStats[text]}
            icon={icon}
            position={position}
          />
        );
      })}
      <img src={imgPath} alt={`pokemon ${name}`} />
    </div>
  );
};
