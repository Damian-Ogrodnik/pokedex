import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { getDamageInfo } from "../../services";

import { TypeInfo } from "../TypeInfo";
import { PokemonInfo } from "../PokemonInfo";

export const PokemonModal = ({
  name,
  imgPath,
  types,
  openModal,
  setOpenModal,
  stats,
  ...props
}) => {
  const [pokemonStats, setPokemonStats] = useState({ types, ...props });
  const [attributes, setAttributes] = useState({});

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  useEffect(() => {
    const getPokemonDetails = async () => {
      if (types.length && openModal) setAttributes(await getDamageInfo(types));
    };
    getPokemonDetails();
  }, [openModal, types]);

  useEffect(() => {
    if (stats.length) {
      setPokemonStats({
        ...pokemonStats,
        attack: stats[4].base_stat,
        defense: stats[3].base_stat,
        health: stats[5].base_stat,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats]);

  return (
    <Modal
      isOpen={openModal}
      contentLabel="Pokemon Modal"
      className="pokemon-modal"
      overlayClassName="overlay"
    >
      <div className="pokemon-modal__details">
        <h2>{name.charAt(0).toUpperCase() + name.substring(1)}</h2>
        <PokemonInfo data={{ name, pokemonStats, imgPath }} />
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
        <div className="pokemon-modal__close">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
      </div>
    </Modal>
  );
};
