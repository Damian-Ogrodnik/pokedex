import React from "react";
import { IconContext } from "react-icons";
import { MdError } from "react-icons/md";

import pokeball from "../../assets/pokeball.png";

export const Loader = ({ loading, error, render }) => {
  return (
    <>
      {error ? (
        <div className="error">
          <IconContext.Provider value={{ className: "error__icon" }}>
            <MdError />
          </IconContext.Provider>
          <p>Something went wrong...</p>
        </div>
      ) : loading ? (
        <div className="loader">
          <img src={pokeball} alt="pokeball" />
        </div>
      ) : (
        render()
      )}
    </>
  );
};
