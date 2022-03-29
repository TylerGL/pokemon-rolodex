import { Component } from "react";
import "./card-list.styles.css";

function capFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTypes(pokemon) {
  const typelength = pokemon.types.length;
  const typeZero = pokemon.types[0].type.name;
  if (typelength === 2) {
    const typeOne = pokemon.types[1].type.name;
    return (
      <p>
        {capFirstChar(typeZero)}, {capFirstChar(typeOne)}
      </p>
    );
  } else if (typelength === 1) {
    return <p>{capFirstChar(typeZero)}</p>;
  }
}


class CardList extends Component {
  render() {
    const { pokemon } = this.props;
    // console.log(this.props);
    // console.log("render");
    return (
      <div className="card-list">
        {pokemon.map((pokemon) => {
          const { id, name, sprites, height, weight } = pokemon;
          return (
            <div className="card-container" key={id}>
              <h1 className="pokemon-name">{capFirstChar(name)}</h1>
              <img
                className="pokemon-img"
                src={sprites.front_default}
                alt="regular-front"
              ></img>
              <div className="pokemon-type">{getTypes(pokemon)}</div>
              <p className="pokemon-height">
                Height: {Math.round(height * 0.1 * 100) / 100}m
              </p>
              <p className="pokemon-weight">
                Weight: {Math.round(weight * 0.1 * 100) / 100}kg
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
