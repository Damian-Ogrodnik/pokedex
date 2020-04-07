import React from "react";

export const TypeInfo = ({ types, name = "" }) => {
  return (
    <div className={`pokemon-types ${name}`}>
      {types.map(({ type }) => (
        <div className={`pokemon-type ${type.name}`}>{type.name}</div>
      ))}
    </div>
  );
};
