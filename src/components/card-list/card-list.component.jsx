import { Component } from "react";

class CardList extends Component {
  render() {
    const { pokemon } = this.props;
    console.log(this.props);
    console.log('render');
    return pokemon.map((pokemon) => <div key={pokemon.id}> {pokemon.name} </div>);
  }
}

export default CardList;
