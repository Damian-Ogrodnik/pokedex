import React from "react";

export const Information = ({ imgPath, secondText, text }) => {
  return (
    <div className="information" data-testid="container">
      {imgPath && <img alt={"Information"} src={imgPath} data-testid="img" />}
      <p data-testid="text">{text}</p>
      {secondText && <p data-testid="second-text">{secondText}</p>}
    </div>
  );
};
