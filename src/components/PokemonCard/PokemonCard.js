import React, { useEffect, useState } from "react";

import { useFetch } from "../../custom-hooks";

export const PokemonCard = ({ name, url }) => {
  const [imgPath, setImgPath] = useState("");
  const { response, error } = useFetch(url);

  useEffect(() => {
    if (Boolean(response)) setImgPath(response.sprites.front_default);
  }, [response, name]);

  return (
    <div className="pokemon-card">
      <p>{name.charAt(0).toUpperCase() + name.substring(1)}</p>
      <img src={imgPath} alt={`pokemon ${name}`} />
    </div>
  );
};
