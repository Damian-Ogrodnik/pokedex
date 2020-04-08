import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import defenseIcon from "../../assets/defense.png";
import attackIcon from "../../assets/attack.png";
import healthIcon from "../../assets/health.png";
import heightIcon from "../../assets/height.png";
import weightIcon from "../../assets/weight.png";
import pokeballBlackIcon from "../../assets/pokeball-black.png";

import { TypeInfo } from "../TypeInfo";
import { PokemonStats } from "../PokemonStats";

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
  const [pokemonStats, setPokemonStats] = useState([[]]);
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

  useEffect(() => {
    if (stats.length) {
      setPokemonStats({
        attack: stats[4].base_stat,
        defense: stats[3].base_stat,
        health: stats[5].base_stat,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats]);

  const handleClose = () => {
    console.log(pokemonStats);
    setOpenModal(false);
  };

  //console.log(pokemonStats);

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
            <PokemonStats types={types} icon={pokeballBlackIcon} name="right" />
            <PokemonStats text={height} icon={heightIcon} name="right" />
            <PokemonStats text={weight} icon={weightIcon} name="right" />
          </div>
          <div className="pokemon-modal__main-info__img">
            <img src={imgPath} alt={`pokemon ${name}`} />
          </div>
          <div className="pokemon-modal__main-info__stats wrapper">
            <PokemonStats text={pokemonStats.attack} icon={attackIcon} />
            <PokemonStats text={pokemonStats.defense} icon={defenseIcon} />
            <PokemonStats text={pokemonStats.health} icon={healthIcon} />
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
