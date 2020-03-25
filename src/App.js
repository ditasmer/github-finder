import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
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

 //Clear users from state
 clearUsers = () => this.setState({ users: [], loading: false});

//Set Alert
setAlert = (msg, type) => {
  this.setState({ alert: { msg, type } });

  setTimeout(() => this.setState({ alert: null}), 5000);
};

  render() { //lifecicle method required
    const { users, loading } = this.state;

    return (
      <div className='App'>
        <Navbar />   
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers} 
          // showClear={this.state.users.length > 0 ? true: false}
          showClear={users.length > 0 ? true: false}
          setAlert={this.setAlert}
          />
          {/* <Users loading={this.state.loading} users={this.state.users}/> */}
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

export default App;
