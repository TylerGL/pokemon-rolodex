import { Component } from 'react';
import './card.styles.css';

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
  
  function convertUnits (pokemon, measure){
    var convWeight = Math.round(pokemon.weight * 0.1 * 100) / 100;
    var convHeight = Math.round(pokemon.height * 0.1 * 100) / 100;
    if (measure === pokemon.height){
      // console.log('height working');
      return convHeight;
    } else if (measure === pokemon.weight){
      // console.log('weight working');
      return convWeight;
    }
  }

class Card extends Component {
    render(){
        const { pokemon } = this.props
        const { id, name, sprites, height, weight } = this.props.pokemon;
        return(
            <div className="card-container" key={id}>
              <h1 className="pokemon-name">{capFirstChar(name)}</h1>
              <img
                className="pokemon-img"
                src={sprites.front_default}
                alt="regular-front"
              ></img>
              <div className="pokemon-type">{getTypes(pokemon)}</div>
              <p className="pokemon-height">
                Height: {convertUnits(pokemon, height)}m
              </p>
              <p className="pokemon-weight">
                Weight: {convertUnits(pokemon, weight)}kg
              </p>
            </div>
        )
    }
}

export default Card;