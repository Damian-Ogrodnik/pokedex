import React, { useState, useEffect } from "react";

import { getDamageInfo } from "../../services";

import { TypeInfo } from "../TypeInfo";

export const PokemonAttributes = ({ types, openModal }) => {
  const [attributes, setAttributes] = useState({});

  useEffect(() => {
    const getPokemonDetails = async () => {
      if (types.length && openModal) setAttributes(await getDamageInfo(types));
    };
    getPokemonDetails();
  }, [openModal, types]);

  return (
    <div className="pokemon-modal__strengths-weaknesses">
      <div className="pokemon-modal__strengths-weaknesses--category">
        <h3>STRENGTHS</h3>
        <TypeInfo types={attributes.strengths} name="details" />
      </div>
      <div className="pokemon-modal__strengths-weaknesses--category">
        <h3>WEAKNESSES</h3>
        <TypeInfo types={attributes.weaknesses} name="details" />
      </div>
    </div>
  );
};
