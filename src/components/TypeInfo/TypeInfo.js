import React from "react";

export const TypeInfo = ({ types, name = "" }) => {
  console.log(types);
  return (
    <div className={`pokemon-types ${name}`}>
      {types.map(({ type }) => (
        <div className={`pokemon-type ${type.name} ${name}`}>{type.name}</div>
      ))}
    </div>
  );
};
