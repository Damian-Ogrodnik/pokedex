import * as types from "./dataTypes";

export const startFetch = () => {
  return {
    type: types.START_FETCH_POKEMON,
  };
};

export const fetchSuccess = (pokemon) => {
  return {
    type: types.FETCH_POKEMON_SUCCESS,
    payload: { pokemon },
  };
};

export const fetchFailure = (error) => {
  return {
    type: types.FETCH_POKEMON_FAILURE,
    payload: { error },
  };
};

export const setFilteredPokemon = (filteredPokemon) => {
  return {
    type: types.FILTER_POKEMON,
    payload: { filteredPokemon },
  };
};
