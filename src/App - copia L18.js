import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

/*  async componentDidMount() {
   //console.log(123);
   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
   this.setState({ loading: true });

   //Axios to fetch the data
   const res = await axios.get(
     `https://api.github.com/users?client_id=${
       process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
   
   //console.log(res.data);
   this.setState({ users: res.data, loding: false });
 } */

// Search Github users
 searchUsers = async text => {
   this.setState({ loading: true });

   console.log(text);
   
   const res = await axios.get(
    `https://api.github.com/search/users?q=${text}&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
     );
  
  //console.log(res.data);
  this.setState({ users: res.data.items, loading: false });
 };

  render() { //lifecicle method required

    return (
      <div className='App'>
        <Navbar />   
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
