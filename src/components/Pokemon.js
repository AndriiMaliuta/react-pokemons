import React, { Component } from 'react';
import PokemonsDataService from '../api/PokemonsDataService';
// import loading from '../../public/loa'

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', name: '', image: '', weight: 0 };
  }

  componentDidMount() {
    console.log('Inside Pokemon page');
    PokemonsDataService.getPokemonByName(this.props.match.params.name)
      .then((response) => {
        // console.log(response.data.sprites.other.dream_world.front_default);
        this.setState((state) => ({
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.other.dream_world.front_default,
          weight: response.data.weight,
        }));
        console.log(this.state.pokemon);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className='pokemon-root'>
        <h4>Pokemon {this.state.name}</h4>
        <p>Weight: {this.state.weight}</p>
        {/* {this.state.image && <img src={this.state.image} alt='pokemon' />} */}
        {this.state.image ? (
          <img src={this.state.image} alt='pokemon' />
        ) : (
          <img
            src='https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e4708736f500b8e8860ed6393199ca4993580be5c9f&rid=giphy.gif'
            alt='loading'
          />
        )}
      </div>
    );
  }
}

export default Pokemon;
