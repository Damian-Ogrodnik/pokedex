import React from "react";

import { TypeInfo } from "../TypeInfo";

export const PokemonStats = ({ text, icon, position = "left" }) => {
  return (
    <div className={`pokemon-modal__main-info__stats grid__${position}`}>
      {typeof text === "number" ? (
        <p>{text}</p>
      ) : (
        <TypeInfo types={text} name="type" />
      )}
      <img src={icon} alt={text} />
    </div>
  );
};
