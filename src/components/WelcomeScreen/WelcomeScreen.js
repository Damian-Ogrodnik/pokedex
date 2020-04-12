import React, { useEffect, useState } from "react";

import pokeballImg from "../../assets/pokeball.png";

export const WelcomeScreen = () => {
  const [isOpen, setOpen] = useState(true);
  const [isOut, setOut] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setOut("out");
    }, 3500);
    setTimeout(() => {
      setOpen(false);
    }, 5500);
  }, []);

  return (
    <>
      <div className="curtain curtain__left"></div>
      {isOpen && (
        <p className={`welcome ${isOut}`}>
          <p className={`welcome__header--up ${isOut}`}>Pokedex</p>
          <img
            className={`welcome__img ${isOut}`}
            src={pokeballImg}
            alt="Pokeball"
          />
          <p className={`welcome__header--down ${isOut}`}>Welcome</p>
        </p>
      )}
      <div className="curtain curtain__right"></div>
    </>
  );
};
