import React, { useEffect, useState } from "react";

import { useFetch } from "../../custom-hooks";

import { Loader } from "../Loader";

export const PokemonCard = ({ name, url }) => {
  const [imgPath, setImgPath] = useState("");
  const [loading, setLoading] = useState(false);
  const { response, error } = useFetch(url, setLoading);

  useEffect(() => {
    setLoading(true);
  }, [url]);

  useEffect(() => {
    if (Boolean(response)) setImgPath(response.sprites.front_default);
  }, [response, name]);

  return (
    <Loader
      error={error}
      loading={loading}
      render={() => {
        return (
          <div className="pokemon-card">
            <img src={imgPath} alt={`pokemon ${name}`} />
            <div className="pokemon-card__details">
              <p>{name.charAt(0).toUpperCase() + name.substring(1)}</p>
              <button>Details</button>
            </div>
          </div>
        );
      }}
    />
  );
};
