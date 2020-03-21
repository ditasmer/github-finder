import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

 async componentDidMount() {
   //console.log(123);
   this.setState({ loading: true });

   //Axios to fetch the data
   const res = await axios.get('https://api.github.com/users');
   
   //console.log(res.data);
   this.setState({ users: res.data, loding: false });

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
