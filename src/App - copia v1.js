import React, { Component } from 'react';
import './App.css';

class App extends Component {
  foomet = () => 'Bars';
  render() {
    const name = 'John Doe';
    const foo = () => 'Bar';
    const loading = false;
    const showName = true;

    // if(loading) { //Conditionals
    //   return <h4>Loading...</h4>;
    // }

    return (
      <div className='App'>
        <h1>My App</h1>
        {loading ? (
          <h4>Loading...</h4>
         ) : ( 
          <h1>Hello {showName ? name : null}</h1>
         )}

         {/* The same but simplifyed */}
         {/* {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>} */}
 
        <h1>Hello {name.toUpperCase()}</h1>
        <h1>Hello {foo()}</h1>
        <h1>Hello {this.foomet()}</h1>
      </div>
    );
  }
}

export default App;
