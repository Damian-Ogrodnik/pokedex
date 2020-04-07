import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import defenseIcon from "../../assets/defense.png";
import atackIcon from "../../assets/attack.png";
import healthIcon from "../../assets/health.png";
import heightIcon from "../../assets/height.png";
import weightIcon from "../../assets/weight.png";
import pokeballBlackIcon from "../../assets/pokeball-black.png";

import { TypeInfo } from "../TypeInfo";

import { getDamageInfo } from "../../services";

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
  const [weaknesses, setWeaknesses] = useState([]);
  const [strengths, setStrengths] = useState([]);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  useEffect(() => {
    const getPokemonDetails = async () => {
      if (types.length && openModal) {
        let { weaknesses, strengths } = await getDamageInfo(types);
        setWeaknesses(weaknesses);
        setStrengths(strengths);
      }
    };

    getPokemonDetails();
  }, [openModal, types]);

  const handleClose = () => {
    setOpenModal(false);
  };

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
              <img src={pokeballBlackIcon} alt="type" />
              <TypeInfo types={types} name="type" />
            </div>
            <div className="pokemon-modal__main-info__stats grid">
              <img src={heightIcon} alt="height" />
              <p>{height}</p>
            </div>
            <div className="pokemon-modal__main-info__stats grid">
              <img src={weightIcon} alt="weight" />
              <p>{weight}</p>
            </div>
          </div>
          <div className="pokemon-modal__main-info__img">
            <img src={imgPath} alt={`pokemon ${name}`} />
          </div>
          <div className="pokemon-modal__main-info__stats wrapper">
            <div className="pokemon-modal__main-info__stats grid">
              <img src={atackIcon} alt="attack" />
              <p>{stats.length ? stats[4].base_stat : ""}</p>
            </div>
            <div className="pokemon-modal__main-info__stats grid">
              <img src={defenseIcon} alt="defense" />
              <p>{stats.length ? stats[3].base_stat : ""}</p>
            </div>
            <div className="pokemon-modal__main-info__stats grid">
              <img src={healthIcon} alt="health" />
              <p>{stats.length ? stats[5].base_stat : ""}</p>
            </div>
          </div>
        </div>
        <div className="pokemon-modal__strengths-weaknesses">
          <div className="pokemon-modal__strengths-weaknesses--category">
            <h3>STRENGTHS</h3>
            <TypeInfo types={strengths} name="details" />
          </div>
          <div className="pokemon-modal__strengths-weaknesses--category">
            <h3>WEAKNESSES</h3>
            <TypeInfo types={weaknesses} name="details" />
          </div>
        </div>
        <div className="pokemon-modal__close">
          <button onClick={() => handleClose()}>X</button>
        </div>
      </div>
    </Modal>
  );
};
