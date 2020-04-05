import React from "react";

import { Pagination } from "../Pagination";
import { PokemonBoard } from "../PokemonBoard/PokemonBoard";
import { Search } from "../Search";

export const Pokedex = () => {
  return (
    <div>
      <Search />
      <PokemonBoard />
      <Pagination />
    </div>
  );
};
