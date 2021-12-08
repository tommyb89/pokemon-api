import React from "react";

const PokeTile = (props) => {
  const { name } = props;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default PokeTile;
