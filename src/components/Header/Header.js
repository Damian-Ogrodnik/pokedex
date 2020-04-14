import React from "react";

import pokedexImg from "../../assets/pokedex_logo.png";

import { Search } from "../Search";

export const Header = () => {
  return (
    <div className="header" data-testid="container">
      <img alt="pokedex logo" className="header__logo" src={pokedexImg} data-testid="img" />
      <Search />
    </div>
  );
};
