import { Component } from "react";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=898") //full = 898
      .then((response) => response.json())
      .then((data) => {
        let results = data.results;
        let promisesArray = results.map((result) => {
          return fetch(result.url).then((response) => response.json());
        });
        return Promise.all(promisesArray);
      })
      .then((data) =>
        this.setState({ pokemon: data }, () =>
          console.log("Main Pokemon State: ", this.state.pokemon)
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { pokemon, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredPokemon = pokemon.filter((pokemon) => {
      return pokemon.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <img className='app-title-img' alt='Pokemon Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/2560px-International_Pokémon_logo.svg.png'></img>
      <h1 className='app-title'>Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Pokémon"
          className={"search-box"}
        />
        <CardList pokemon={filteredPokemon} />
      </div>
    );
  }
}

export default App;
