import * as types from "./dataTypes";

const initialState = {
  pokemon: [],
  filteredPokemon: null,
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.START_FETCH_POKEMON:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: payload.pokemon,
      };
    case types.FETCH_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case types.FILTER_POKEMON:
      return {
        ...state,
        filteredPokemon: payload.filteredPokemon,
      };
    default:
      return state;
  }
};

export default dataReducer;
