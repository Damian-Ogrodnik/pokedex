import React from "react";
import Modal from "react-modal";

import { TypeInfo } from "../TypeInfo";

export const PokemonModal = ({
  name,
  imgPath,
  types,
  openModal,
  setOpenModal,
  height,
  weight,
  stats,
}) => {
  Modal.setAppElement("#root");

  const handleClose = () => {
    setOpenModal(false);
  };

  console.log(stats);

  return (
    <Modal
      isOpen={openModal}
      contentLabel="Pokemon Modal"
      className="pokemon-modal"
      overlayClassName="overlay"
    >
      <div className="pokemon-modal__details">
        <h2>{name.charAt(0).toUpperCase() + name.substring(1)}</h2>
        <div className="pokemon-modal__main-info">
          <div className="pokemon-modal__main-info__stats wrapper">
            <div className="pokemon-modal__main-info__stats grid">
              <p>TYPE</p>
              <TypeInfo types={types} name="modal" />
            </div>
            <div className="pokemon-modal__main-info__stats grid">
              <p>HEIGHT</p>
              <p>{height}</p>
            </div>
            <div className="pokemon-modal__main-info__stats grid">
              <p>WEIGHT</p>
              <p>{weight}</p>
            </div>
          </div>
          <div className="pokemon-modal__main-info__stats wrapper">
            <div className="pokemon-modal__main-info__stats grid">
              <p>ATTACK</p>
              <p>{stats.length ? stats[4].base_stat : ""}</p>
            </div>
            <div className="pokemon-modal__main-info__stats grid">
              <p>DEFENSE</p>
              <p>{stats.length ? stats[3].base_stat : ""}</p>
            </div>
            <div className="pokemon-modal__main-info__stats grid">
              <p>HP</p>
              <p>{stats.length ? stats[5].base_stat : ""}</p>
            </div>
          </div>
          <div className="pokemon-modal__strengths-weaknesses">
            <div className="pokemon-modal__strg-weak strengths"></div>
            <div className="pokemon-modal__strg-weak weaknesses"></div>
          </div>
          <div className="pokemon-modal__main-info__img">
            <img src={imgPath} alt={`pokemon ${name}`} />
          </div>
        </div>
        <div className="pokemon-details__close">
          <button onClick={() => handleClose()}>X</button>
        </div>
      </div>
    </Modal>
  );
};
