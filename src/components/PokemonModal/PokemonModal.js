import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { PokemonInfo } from "../PokemonInfo";
import { PokemonAttributes } from "../PokemonAttributes";

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

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

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
        <PokemonAttributes types={types} openModal={openModal} />
        <div className="pokemon-modal__close">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
      </div>
    </Modal>
  );
};
