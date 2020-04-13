import React, { useState, useEffect } from "react";

import { getDamageInfo } from "../../services";

import { TypeInfo } from "../TypeInfo";

export const PokemonAttributes = ({ openModal, types }) => {
  const [attributes, setAttributes] = useState({});

  useEffect(() => {
    const getPokemonDetails = async () => {
      if (types.length && openModal) setAttributes(await getDamageInfo(types));
    };
    getPokemonDetails();
  }, [openModal, types]);

  return (
    <div className="pokemon-modal__attributes">
      {Object.entries(attributes).map(([name, value]) => (
        <div className="pokemon-modal__attributes--category" key={name}>
          <h3>{name.toUpperCase()}</h3>
          <TypeInfo name="details" types={value} />
        </div>
      ))}
    </div>
  );
};
