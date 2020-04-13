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
      <div className="pokemon-modal__attributes--category">
        <h3>STRENGTHS</h3>
        <TypeInfo name="details" types={attributes.strengths} />
      </div>
      <div className="pokemon-modal__attributes--category">
        <h3>WEAKNESSES</h3>
        <TypeInfo name="details" types={attributes.weaknesses} />
      </div>
    </div>
  );
};
