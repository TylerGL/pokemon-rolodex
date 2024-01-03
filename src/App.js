import CardList from "./components/card-list/card-list.jsx";
import SearchBox from "./components/search-box/search-box.jsx";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState(pokemon);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151") //full = 898
      .then((response) => response.json())
      .then((data) => {
        let results = data.results;
        let promisesArray = results.map((result) => {
          return fetch(result.url).then((response) => response.json());
        });
        return Promise.all(promisesArray);
      })
      .then((data) => setPokemon(data));
  }, []);

  useEffect(() => {
    const newFilteredPokemon = pokemon.filter((pokemon) => {
      return pokemon.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredPokemon(newFilteredPokemon);
  }, [pokemon, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <img
        className="app-title-img"
        alt="Pokemon Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/2560px-International_Pokémon_logo.svg.png"
      ></img>
      <h1 className="app-title">Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Pokémon"
        className={"search-box"}
      />

      <CardList pokemon={filteredPokemon} />
    </div>
  );
};

export default App;
