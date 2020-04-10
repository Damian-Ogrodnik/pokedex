import * as actions from "./dataActions";

import axios from "axios";

export const fetchPokemon = (
  url = "https://pokeapi.co/api/v2/pokemon/?limit=811s",
  category = false
) => async (dispatch) => {
  try {
    await dispatch(actions.startFetch());
    const response = await axios.get(url);
    if (category) {
      const pokemon = await response.data.pokemon.map(({ pokemon }) => pokemon);
      dispatch(actions.fetchSuccess(pokemon));
    } else {
      dispatch(actions.fetchSuccess(response.data.results));
    }
  } catch (error) {
    dispatch(actions.fetchFailure(error.message));
  }
};

export const filterPokemon = (search, pokemon) => async (dispatch) => {
  try {
    const filteredPokemon = await filterArray(search, pokemon);
    dispatch(actions.setFilteredPokemon(filteredPokemon));
  } catch (error) {
    console.log(error);
  }
};

const filterArray = async (search, array) => {
  const filteredArray = await array.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );
  return filteredArray;
};
