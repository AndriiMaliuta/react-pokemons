import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
        <Footer/>
    </div>
  );
}

export default App;
