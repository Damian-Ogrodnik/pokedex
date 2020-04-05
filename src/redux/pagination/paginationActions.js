import * as types from "./paginationTypes";

export const setPage = (pageNumber) => {
  return {
    type: types.SET_PAGE,
    payload: { pageNumber },
  };
};

export const paginateSuccess = (paginatedPokemon) => {
  return {
    type: types.PAGINATE_SUCCESS,
    payload: { paginatedPokemon },
  };
};

export const paginateFailure = (error) => {
  return {
    type: types.PAGINATE_FAILURE,
    payload: { error },
  };
};
