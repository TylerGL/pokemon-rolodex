import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

function capFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTypes(pokemon) {
  const typelength = pokemon.types.length;
  if (typelength === 2) {
    // console.log(pokemon.types[0].type.name)
    // console.log(pokemon.types[1].type.name)
    return (
      <p>
        Types: {capFirstChar(pokemon.types[0].type.name)},{" "}
        {capFirstChar(pokemon.types[1].type.name)}
      </p>
    );
  } else if (typelength === 1) {
    return <p>Type: {capFirstChar(pokemon.types[0].type.name)}</p>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
    };
  }

  //  componentDidMount(){
  //   fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
  //   .then(response => response.json())
  //   .then((pokemon) =>
  //   this.setState(
  //     () => {
  //       return {pokemon: pokemon};
  //     },
  //     () => {
  //       console.log(this.state);
  //     }
  //   ))}

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
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

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Pokemon"
          onChange={(event) => {
            console.log(event.target.value);
            const searchString = event.target.value.toLocaleLowerCase();
            const filteredPokemon = this.state.pokemon.filter((pokemon) => {
              return pokemon.name.toLocaleLowerCase().includes(searchString);
            });

            this.setState(() => {
              return {pokemon:filteredPokemon};
            })
          }}
        />
        {this.state.pokemon.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <h1>Name: {capFirstChar(pokemon.name)}</h1>
              <p>ID: {pokemon.id}</p>
              <p>Weight: {Math.round(pokemon.weight * 0.1 * 100) / 100}kg</p>
              <p>Height: {Math.round(pokemon.height * 0.1 * 100) / 100}m</p>
              <div>{getTypes(pokemon)}</div>
              <img src={pokemon.sprites.front_default} alt="regular"></img>
              <img src={pokemon.sprites.front_shiny} alt="shiny"></img>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
