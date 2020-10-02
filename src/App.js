import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Pokemon from './components/Pokemon';
import PokemonsList from './components/PokemonsList';

function App() {
  return (
    <div className='App'>
      <Header />
      <PokemonsList />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
