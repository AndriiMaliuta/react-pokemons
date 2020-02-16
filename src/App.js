import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from "./component/footer";
import Pokemon from "./component/Pokemon";

function App() {
  return (
    <div className="App">
       <Header />
        <Pokemon/>
        <Footer/>
    </div>
  );
}

export default App;
