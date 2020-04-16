import React from "react";

import { statsData } from "../../utils";

import { PokemonStats } from "../PokemonStats";

export const PokemonInfo = ({
  data: { imgPath, name, pokemonStats, pokemonType },
}) => {
  return (
    <div className="pokemon-modal__main-info" data-testid="main-info">
      {statsData.map(([icon, text, position = "left"], index) => (
        <PokemonStats
          icon={icon}
          key={name + pokemonStats[text] + index}
          pokemonType={pokemonType}
          position={position}
          text={pokemonStats[text]}
        />
      ))}
      <img alt={`pokemon ${name}`} src={imgPath} data-testid="pokemon-image" />
    </div>
  );
};
