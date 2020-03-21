import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    // const numbers = [1, 2, 3, 4]; //error para chequear

    return (
      <div className='App'>
        {/* <Navbar title={numbers}/>   */}
        {/* se pueden añadir props a parte de las default props, para poder modificar si es el objetivo, pero teninedo en cuenta el tipo de props, este es un ejemplo de error en el tipo de porps */}
        <Navbar />        
      </div>
    );
  }
}

export default App;
