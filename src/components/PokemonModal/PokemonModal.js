import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { PokemonAttributes } from "../PokemonAttributes";
import { PokemonInfo } from "../PokemonInfo";

export const PokemonModal = ({
  imgPath,
  name,
  openModal,
  setOpenModal,
  stats,
  types,
  ...props
}) => {
  const [pokemonStats, setPokemonStats] = useState({ types, ...props });
  const [pokemonType, setPokemonType] = useState("");

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  useEffect(() => {
    if (types.length) setPokemonType(types[0].type.name);
  }, [types]);

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
      className={`pokemon-modal ${pokemonType}`}
      contentLabel="Pokemon Modal"
      isOpen={openModal}
      overlayClassName="overlay"
    >
      <div className="pokemon-modal__details">
        <h2>{name.charAt(0).toUpperCase() + name.substring(1)}</h2>
        <PokemonInfo data={{ imgPath, name, pokemonStats, pokemonType }} />
        <PokemonAttributes openModal={openModal} types={types} />
        <div className="pokemon-modal__close">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
      </div>
    </Modal>
  );
};
