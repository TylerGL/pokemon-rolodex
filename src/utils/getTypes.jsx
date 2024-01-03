import capFirstChar from "./capFirstChar";

export default function getTypes(pokemon) {
  const typelength = pokemon.types.length;
  const typeZero = pokemon.types[0].type.name;
  var typeZeroSrc = "images/" + typeZero + ".svg.png";
  if (typelength === 2) {
    const typeOne = pokemon.types[1].type.name;
    var typeOneSrc = "images/" + typeOne + ".svg.png";
    return (
      <div className="type-div">
        <div className="type-primary">
          <img
            className="type-icon"
            src={typeZeroSrc}
            alt="pokemon-type-badge-0"
          ></img>
          <p className="type-icon-text">{capFirstChar(typeZero)}</p>
        </div>
        <div className="type-secondary">
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
      <div className="type-div">
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
