import React from "react";

import pokeballImg from "../../assets/pokeball.png";

export const Loader = () => {
  return (
    <div className="loader">
      <img alt="pokeball" src={pokeballImg} />
    </div>
  );
};
