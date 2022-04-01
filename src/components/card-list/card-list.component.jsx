import { Component } from "react";
import "./card-list.styles.css";
import Card from '../card/card.component'

class CardList extends Component {
  render() {
    const { pokemon } = this.props;
    // console.log(this.props);
    return (
      <div className="card-list">
        {pokemon.map((pokemon) => {
          return(
            <Card pokemon={pokemon} key={pokemon.id} />
          )
        })}
      </div>
    );
  }
}

export default CardList;
