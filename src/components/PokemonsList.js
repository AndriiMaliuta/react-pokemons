import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PokemonsDataService from '../api/PokemonsDataService';

class PokemonsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }
  componentDidMount() {
    console.log('Inside Pokemons List page');
    // Get Pokemons with URLs

    console.log(PokemonsDataService.getAllPokemons());
    this.setState((state) => ({
      pokemons: PokemonsDataService.getAllPokemonsWithUrls(),
    }));

    // Get pokemons

    // PokemonsDataService.getAllPokemons()
    //   .then((response) => {
    //     console.log(response.data);

    //     this.setState((state) => ({ pokemons: response.data.results }));
    //   })
    //   .catch((error) => console.log(error));
  }
  render() {
    return (
      <>
        <h2>Pokemons</h2>
        {console.log(this.state.pokemons)}
        <div className='pokemons-root'>
          {this.state.pokemons.map((pokemon) => (
            <div className='pokey-div' key={pokemon.name}>
              {console.log(pokemon)}
              <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default PokemonsList;
