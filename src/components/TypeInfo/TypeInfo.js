import React from "react";

export const TypeInfo = ({ types }) => {
  console.log(types);
  return (
    <div className="pokemon-types">
      {types.map(({ type }) => (
        <div className={`pokemon-type ${type.name}`}>{type.name}</div>
      ))}
    </div>
  );
};
