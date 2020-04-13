import React from "react";

export const Information = ({ imgPath, secondText, text }) => {
  return (
    <div className="information">
      <img alt={"Information"} src={imgPath} />
      <p>{text}</p>
      {secondText && <p>{secondText}</p>}
    </div>
  );
};
