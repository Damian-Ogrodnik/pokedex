import * as actions from "./dataActions";

import axios from "axios";

export const fetchPokemon = () => async (dispatch) => {
  try {
    await dispatch(actions.startFetch());
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=811s"
    );
    dispatch(actions.fetchSuccess(response.data.results));
  } catch (error) {
    dispatch(actions.fetchFailure(error.message));
  }
};
