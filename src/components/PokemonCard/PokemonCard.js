import React, { useEffect, useState } from "react";

import { useFetch } from "../../custom-hooks";

import { Loader } from "../Loader";
import { PokemonModal } from "../PokemonModal";
import { TypeInfo } from "../TypeInfo";

export const PokemonCard = ({ name, url }) => {
  const [openModal, setOpenModal] = useState(false);
  const [imgPath, setImgPath] = useState("");
  const [loading, setLoading] = useState(false);
  const { response, error } = useFetch(url, setLoading);

  useEffect(() => {
    setLoading(true);
  }, [url]);

  useEffect(() => {
    if (Boolean(response)) {
      setImgPath(response.sprites.front_default);
    }
  }, [response, name]);

  return (
    <Loader
      error={error}
      loading={loading}
      render={() => {
        return (
          <div className="pokemon-card">
            <TypeInfo types={response ? response.types : []} />
            <img src={imgPath} alt={`pokemon ${name}`} />
            <div className="pokemon-card__details">
              <p>{name.charAt(0).toUpperCase() + name.substring(1)}</p>
              <button onClick={() => setOpenModal(true)}>Details</button>
            </div>
            <PokemonModal
              name={name}
              imgPath={imgPath}
              types={response ? response.types : []}
              openModal={openModal}
              setOpenModal={setOpenModal}
              height={response ? response.height : {}}
              weight={response ? response.weight : {}}
              stats={response ? response.stats : []}
            />
          </div>
        );
      }}
    />
  );
};
