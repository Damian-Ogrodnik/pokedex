import React, { useEffect, useState } from "react";

import { useFetch } from "../../custom-hooks";
import questionMarkImg from "../../assets/question-mark.png";

import { Loader } from "../Loader";
import { PokemonModal } from "../PokemonModal";
import { TypeInfo } from "../TypeInfo";

export const PokemonCard = ({ name, url }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgPath, setImgPath] = useState(null);
  const { response, error } = useFetch(url, setLoading, {
    types: [],
    height: {},
    weight: {},
    stats: [],
    sprites: {},
  });

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    response.sprites.front_default
      ? setImgPath(response.sprites.front_default)
      : setImgPath(questionMarkImg);
  }, [response.sprites.front_default]);

  return (
    <Loader
      error={error}
      loading={loading}
      render={() => {
        return (
          <div className="pokemon-card">
            <TypeInfo types={response.types} />
            <img src={imgPath} alt={`pokemon ${name}`} />
            <div className="pokemon-card__details">
              <p>{name.charAt(0).toUpperCase() + name.substring(1)}</p>
              <button onClick={() => setOpenModal(true)}>Details</button>
            </div>
            <PokemonModal
              name={name}
              imgPath={imgPath}
              openModal={openModal}
              setOpenModal={setOpenModal}
              {...response}
            />
          </div>
        );
      }}
    />
  );
};
