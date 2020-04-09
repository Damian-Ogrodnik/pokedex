import * as actions from "./paginationActions";

export const paginatePokemon = (page, pokemon, pokemonPerPage) => async (
  dispatch
) => {
  try {
    dispatch(actions.setPage(page));

    const indexOfLastPokemon = page * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemon = await pokemon.slice(
      indexOfFirstPokemon,
      indexOfLastPokemon
    );

    dispatch(actions.paginateSuccess(currentPokemon));
  } catch (error) {
    dispatch(actions.paginateFailure(error.message));
  }
};
