import React, { useEffect, useState } from "react";

import SearchBox from "../../components/SearchBox/SearchBox";
import PokeCard from "../../components/PokeCard/PokeCard";

const SearchPokemon = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null); // [] or null

  //https://pokeapi.co/api/v2/pokemon

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    if (searchTerm) {
      fetch(URL)
        .then((res) => res.json())
        .then((pokemon) => {
          setPokemon(pokemon);
        });
    }
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const inputValue = e.target[0].value;

    setSearchTerm(inputValue);
  };

  return (
    <div>
      <h1>Search for Pokemon</h1>
      <SearchBox handleSubmit={handleSubmit} searchTerm={searchTerm} />
      {pokemon && (
        <PokeCard name={pokemon.name} imgURL={pokemon.sprites.front_default} />
      )}
    </div>
  );
};

export default SearchPokemon;
