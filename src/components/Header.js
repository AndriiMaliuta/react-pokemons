import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='header-elem'>
        <NavLink to='/' exact={true}>
          Home
        </NavLink>
      </div>
      <div className='header-elem'>
        <NavLink to='/pokemons'>Pokemons</NavLink>
      </div>
    </div>
  );
}

export default Header;
