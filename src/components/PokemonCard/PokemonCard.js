import React from "react";

export const PokemonCard = ({ name, url }) => {
  return (
    <div className="pokemon-card">
      <p>{name}</p>
      <p>{url}</p>
    </div>
  );
};
