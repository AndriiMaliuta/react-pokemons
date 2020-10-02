import React from 'react';
import './App.css';
import Header from './components/Header';
import Pokemon from './components/Pokemon';
import PokemonsList from './components/PokemonsList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' component={Dashboard} exact={true} />
          <Route path='/pokemons/:name' component={Pokemon} exact={true} />
          <Route path='/pokemons' component={PokemonsList} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
