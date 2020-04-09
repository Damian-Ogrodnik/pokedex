import React from "react";

export const TypeInfo = ({ types, name = "" }) => {
  return (
    <div className={`pokemon-types ${name}`}>
      {types &&
        types.map(({ type }) => (
          <div key={type.name} className={`pokemon-type ${type.name} ${name}`}>
            {type.name}
          </div>
        ))}
    </div>
  );
};
