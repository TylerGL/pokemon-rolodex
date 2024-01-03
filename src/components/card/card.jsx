import { useState } from "react";
import "./card.styles.css";
import convertUnits from "../../utils/convertUnits";
import capFirstChar from "../../utils/capFirstChar";
import getTypes from "../../utils/getTypes";

const Card = ({ pokemon }) => {
  const { id, name, height, weight } = pokemon;

  const [img, setImg] = useState(pokemon.sprites.front_default);
  const [imgClass, setImgClass] = useState("pokemon-sprite");
  const cardStyle = pokemon.types[0].type.name;

  const handleClick = () => {
    setImg(pokemon.sprites.front_shiny);
    setImgClass("pokemon-sprite-shiny");
    setTimeout(() => {
      setImg(pokemon.sprites.front_default);
      setImgClass("pokemon-sprite");
    }, 2000);
  };

  return (
    <div id={cardStyle} className="card-container" key={id}>
      <h1 className="pokemon-name">{capFirstChar(name)}</h1>
      <div className="image-div">
        <img
          className="background-image"
          src="images/background1.png"
          alt="landscape"
        ></img>
        <img
          className={imgClass}
          src={img}
          alt="pokemon sprite from the pokedex"
          name="pokemon-sprite"
          onClick={handleClick}
        ></img>
      </div>
      <div className="details-div">
        <div className="type-div">{getTypes(pokemon)}</div>
        <p className="details-text">Height: {convertUnits(pokemon, height)}m</p>
        <p className="details-text">
          Weight: {convertUnits(pokemon, weight)}kg
        </p>
      </div>
    </div>
  );
};

export default Card;
