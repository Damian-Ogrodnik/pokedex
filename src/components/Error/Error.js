import React from "react";

import { IconContext } from "react-icons";
import { MdError } from "react-icons/md";

export const Error = ({ msg = "Something went wrong..." }) => {
  return (
    <div className="error">
      <IconContext.Provider value={{ className: "error__icon" }}>
        <MdError />
      </IconContext.Provider>
      <p>{msg}</p>
    </div>
  );
};
