import React, { Component } from "react";
import Pokecard from "./Pokecard";
import pokemons from "./pokemons"

class Pokedex extends Component {
    static defaultProps = {

    }
  render() {
    return (
    <div className="Pokedex">
        <h1>Pokedex!</h1>
        {pokemons.map((p) => (
            <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience}  />
            ) ) }

    </div>
    );
  }
}

export default Pokedex;