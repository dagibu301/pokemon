import React, { Component } from "react";
import Pokecard from "./Pokecard";
import pokemons from "./pokemons";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: pokemons
  };
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    }else{
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        <h4>Total Experience: {this.props.exp}</h4>
        {title}

        <div className="Pokedex-cards">
          {this.props.pokemon.map(p => (
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
