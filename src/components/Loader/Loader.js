import React from "react";

import pokeballImg from "../../assets/pokeball.png";

export const Loader = () => {
  return (
    <div className="loader" data-testid="loader">
      <img alt="pokeball" src={pokeballImg} data-testid="img" />
    </div>
  );
};
