import React from "react";

export const PokemonCard = ({ name, url }) => {
  return (
    <div className="pokemon-card">
      {name}
      {url}
    </div>
  );
};
