import React from "react";

import pokedexImg from "../../assets/pokedex_logo.png";

import { Search } from "../Search";

export const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={pokedexImg} alt="pokedex logo" />
      <Search />
    </div>
  );
};
