import React, { useEffect, useState } from "react";

import { useFetch } from "../../custom-hooks";

import { Loader } from "../Loader";
import { PokemonModal } from "../PokemonModal";
import { TypeInfo } from "../TypeInfo";

export const PokemonCard = ({ name, url }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { response, error } = useFetch(url, setLoading, {
    types: [],
    height: {},
    weight: {},
    stats: [],
    sprites: {},
  });

  useEffect(() => {
    setLoading(true);
  }, [url]);

  return (
    <Loader
      error={error}
      loading={loading}
      render={() => {
        return (
          <div className="pokemon-card">
            <TypeInfo types={response ? response.types : []} />
            <img src={response.sprites.front_default} alt={`pokemon ${name}`} />
            <div className="pokemon-card__details">
              <p>{name.charAt(0).toUpperCase() + name.substring(1)}</p>
              <button onClick={() => setOpenModal(true)}>Details</button>
            </div>
            <PokemonModal
              name={name}
              imgPath={response.sprites.front_default}
              types={response.types}
              openModal={openModal}
              setOpenModal={setOpenModal}
              height={response.height}
              weight={response.weight}
              stats={response.stats}
            />
          </div>
        );
      }}
    />
  );
};
