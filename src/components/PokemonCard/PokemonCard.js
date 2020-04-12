import React, { useEffect, useState } from "react";

import { useFetch } from "../../custom-hooks";
import questionMarkImg from "../../assets/question-mark.png";

import { Loader } from "../Loader";
import { Error } from "../Error";
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

  return error ? (
    <Error />
  ) : loading ? (
    <Loader />
  ) : (
    <div className="pokemon-card">
      <TypeInfo types={response.types} />
      <img src={imgPath} alt={`pokemon ${name}`} />
      <div className="pokemon-card__details">
        <p>{name.charAt(0).toUpperCase() + name.substring(1)}</p>
        <button onClick={() => setOpenModal(true)}>Details</button>
      </div>
      {openModal && (
        <PokemonModal
          name={name}
          imgPath={imgPath}
          openModal={openModal}
          setOpenModal={setOpenModal}
          {...response}
        />
      )}
    </div>
  );
};
