import React, { Component } from "react";
import Pokecard from "./Pokecard";
import pokemons from "./pokemons";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: pokemons
  };
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <p>Total Experience: {this.props.exp}</p>
        <p>{this.props.isWinner ? "WINNER" : "LOSER"}</p>
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
