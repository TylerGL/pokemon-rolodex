import { Component } from "react";
import "./card.styles.css";

function capFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTypes(pokemon) {
  const typelength = pokemon.types.length;
  const typeZero = pokemon.types[0].type.name;
  var typeZeroSrc = "images/" + typeZero + ".svg.png";
  if (typelength === 2) {
    const typeOne = pokemon.types[1].type.name;
    var typeOneSrc = "images/" + typeOne + ".svg.png";
    return (
      <div className="type-div-double">
        <div className="type-div-double-type-zero">
          <img
            className="type-icon"
            src={typeZeroSrc}
            alt="pokemon-type-badge-0"
          ></img>
          <p className="type-icon-text">{capFirstChar(typeZero)}</p>
        </div>
        <div className="type-div-double-type-one">
          <img
            className="type-icon"
            src={typeOneSrc}
            alt="pokemon-type-badge-1"
          ></img>
          <p className="type-icon-text"> {capFirstChar(typeOne)}</p>
        </div>
      </div>
    );
  } else if (typelength === 1) {
    return (
      <div className="type-div-single">
        <img
          className="type-icon"
          src={typeZeroSrc}
          alt="pokemon-type-badge-0"
        ></img>
        <p className="type-icon-text">{capFirstChar(typeZero)}</p>
      </div>
    );
  }
}

function convertUnits(pokemon, measure) {
  var convWeight = Math.round(pokemon.weight * 0.1 * 100) / 100;
  var convHeight = Math.round(pokemon.height * 0.1 * 100) / 100;
  if (measure === pokemon.height) {
    return convHeight;
  } else if (measure === pokemon.weight) {
    return convWeight;
  }
}

class Card extends Component {
  state = {
    img: this.props.pokemon.sprites.front_default,
    imgStyle: "pokemon-img",
    cardStyle: this.props.pokemon.types[0].type.name
  };
  handleClick = () => {
    this.setState({ img: this.props.pokemon.sprites.front_shiny });
    this.setState({ imgStyle: "shiny-pokemon-img" });
    setTimeout(() => {
      this.setState({ img: this.props.pokemon.sprites.front_default });
      this.setState({ imgStyle: "pokemon-img" });
    }, 2000);
  };
  render() {
    const { pokemon } = this.props;
    const { id, name, height, weight } = this.props.pokemon;
    return (
      <div id={this.state.cardStyle} className="card-container" key={id}>
        <h1 className="pokemon-name">{capFirstChar(name)}</h1>
        <div className="image-div">
        <img
            className="background-image"
            src="images/background1.png"
            alt="landscape"
          ></img>
          <img
            className={this.state.imgStyle}
            src={this.state.img}
            alt="pokemon sprite from the pokedex"
            name="pokemon-img"
            onClick={this.handleClick}
          ></img>
        </div>
        <div className="details-div">
          <div className="type-div">{getTypes(pokemon)}</div>
          <div className="pokemon-h-w">
            <p>Height: {convertUnits(pokemon, height)}m</p>
            <p>Weight: {convertUnits(pokemon, weight)}kg</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
