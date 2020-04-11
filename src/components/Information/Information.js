import React from "react";

export const Information = ({ imgPath, text, secondText }) => {
  return (
    <div className="information">
      <img src={imgPath} alt={"Information"} />
      <p>{text}</p>
      {secondText && <p>{secondText}</p>}
    </div>
  );
};
