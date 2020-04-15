import React from "react";

import { TypeInfo } from "../TypeInfo";

export const PokemonStats = ({
  icon,
  pokemonType,
  position = "left",
  text,
}) => {
  return (
    <div
      className={`pokemon-modal__main-info__stats grid__${position}`}
      data-testid="container"
    >
      {typeof text === "number" ? (
        <p data-testid="text">{text}</p>
      ) : (
        <TypeInfo name="type" types={text} />
      )}
      <img
        alt={text}
        className={`pokemon-modal__main-info__stats ${pokemonType}`}
        src={icon}
      />
    </div>
  );
};
