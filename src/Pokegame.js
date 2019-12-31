import React, { Component } from 'react'

import pokemons from "./pokemons";
import Pokedex from './Pokedex';

class Pokegame extends Component {
    render(){

        let hand1 = [];
        let hand2 = [ ...pokemons ];
        while(hand1.length < hand2.length){
            let randIdx = Math.floor(Math.random() * hand2.length );
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon);
        }

        let exp1 = hand1.reduce( (exp,pokemon) => exp + pokemon.base_experience, 0 );
        let exp2 = hand2.reduce( (exp,pokemon) => exp + pokemon.base_experience, 0 );
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1}  isWinner= { exp1 > exp2}/>
                <Pokedex pokemon={hand2} exp={exp2}  isWinner= { exp2 > exp1}/>
            </div>
        );
    }
}

export default Pokegame;