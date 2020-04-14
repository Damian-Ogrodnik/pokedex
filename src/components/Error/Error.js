import React from "react";

import { IconContext } from "react-icons";
import { MdError } from "react-icons/md";

export const Error = ({ msg = "Something went wrong...", name = "main" }) => {
  return (
    <div className={`error ${name}`} data-testid="container">
      <IconContext.Provider value={{ className: "error__icon" }}>
        <MdError  data-testid="icon"/>
      </IconContext.Provider>
      <p data-testid="message">{msg}</p>
    </div>
  );
};
