import React from "react";

import { TypeInfo } from "../TypeInfo";

export const PokemonStats = ({ text, icon, types, name = "left" }) => {
  return (
    <div className={`pokemon-modal__main-info__stats grid__${name}`}>
      {types ? <TypeInfo types={types} name="type" /> : <p>{text}</p>}
      <img src={icon} alt={text} />
    </div>
  );
};
