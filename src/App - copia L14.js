import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
 componentDidMount(){
   //console.log(123);
   //Axios to fetch the data
   axios
   .get('https://api.github.com/users')
   .then(res => console.log(res.data)); // console -> To inspect React elements in React dev tools Chrome


 }


  render() { //lifecicle method required

    return (
      <div className='App'>
        <Navbar />   
        <div className="container">
        <Users />
        </div>
      </div>
    );
  }
}

export default App;
