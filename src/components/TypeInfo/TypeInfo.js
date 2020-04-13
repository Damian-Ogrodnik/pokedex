import React from "react";

export const TypeInfo = ({ name = "", types }) => {
  return (
    <div className={`pokemon-types ${name}`}>
      {types &&
        types.map(({ type }) => (
          <div className={`pokemon-type ${type.name} ${name}`} key={type.name}>
            {type.name}
          </div>
        ))}
    </div>
  );
};
