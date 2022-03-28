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

class CardList extends Component {
  render() {
    const { pokemon } = this.props;
    console.log(this.props);
    console.log('render');
    return pokemon.map((pokemon) => 
      <div key={pokemon.id}>
        <h1>Name: {capFirstChar(pokemon.name)}</h1>
        <p>ID: {pokemon.id}</p>
        <p>Weight: {Math.round(pokemon.weight * 0.1 * 100) / 100}kg</p>
        <p>Height: {Math.round(pokemon.height * 0.1 * 100) / 100}m</p>
        <div>{getTypes(pokemon)}</div>
        <img src={pokemon.sprites.front_default} alt="regular"></img>
        <img src={pokemon.sprites.front_shiny} alt="shiny"></img>
      </div>);
  }
}

export default CardList;
