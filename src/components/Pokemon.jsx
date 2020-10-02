import React, { Component } from 'react';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', oeder: 0, abilities: [], id: 0, weight: 0 };
  }

  render() {
    return (
      <div className='pokey-div'>
        <h4>Pokemon {this.state.name}</h4>
        <p>Powers: {this.state.weight}</p>
      </div>
    );
  }
}

export default Pokemon;
