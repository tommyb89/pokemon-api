import "./App.scss";

import PokeList from "./containers/PokeList/PokeList";
import SearchPokemon from "./containers/SearchPokemon/SearchPokemon";

const App = () => {
  return (
    <>
      <SearchPokemon />
      <PokeList />
    </>
  );
};

export default App;
