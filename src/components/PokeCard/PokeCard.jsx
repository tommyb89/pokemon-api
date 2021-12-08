import React from "react";

const PokeCard = (props) => {
  const { name, imgURL } = props;
  return (
    <div>
      <p>{name}</p>
      <img src={imgURL} alt="" />
    </div>
  );
};

export default PokeCard;
