import React, { Component } from 'react';
import PokemonsDataService from '../api/PokemonsDataService';

export default class PokemonsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }
  componentDidMount() {
    PokemonsDataService.getAllPokemons()
      .then((response) => {
        console.log(response.data);
        this.setState((state) => ({ pokemons: response.data.results }));
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <h2>Pokemons</h2>
        {this.state.pokemons.map((pokemon) => (
          <div>{pokemon.name}</div>
        ))}
      </div>
    );
  }
}
