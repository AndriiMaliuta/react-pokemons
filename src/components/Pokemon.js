import React, { Component } from 'react';
import PokemonsDataService from '../api/PokemonsDataService';
// import loading from '../../public/loa'

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      image: '',
      weight: 0,
      order: 0,
      height: 0,
    };
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
          order: response.data.order,
          height: response.data.height,
        }));
        // console.log(this.state.pokemon);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className='pokemon-root'>
        <h4>
          Pokemon <span className='pokey-name'>{this.state.name}</span>
        </h4>
        <p>Weight: {this.state.weight}</p>
        <p>Order: {this.state.order}</p>
        <p>Height: {this.state.height}</p>
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
