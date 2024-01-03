import "./card-list.styles.css";
import Card from "../card/card";

const CardList = ({ pokemon }) => {
  return (
    <div className="card-list">
      {pokemon.map((pokemon) => {
        return <Card pokemon={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
};

export default CardList;
