import React, { Component } from 'react';
import PokemonsDataService from '../api/PokemonsDataService';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: '' };
  }

  componentDidMount() {
    console.log('Inside Pokemon page');
    PokemonsDataService.getPokemonByName(this.props.match.params.name)
      .then((response) => {
        console.log(response.data);
        this.setState((state) => ({ pokemon: response.data }));
        console.log(this.state.pokemon);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className='pokemon-root'>
        <h4>Pokemon {this.state.pokemon.name}</h4>
        <p>Weight: {this.state.pokemon.weight}</p>
      </div>
    );
  }
}

export default Pokemon;
