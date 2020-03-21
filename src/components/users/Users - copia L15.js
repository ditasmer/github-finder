import React, { Component } from 'react';
import UserItem from './UserItem';

//class Users extends Component {
const Users = ({ users, loading }) => {    
//    render() {
        return (
            <div style={userStyle}>
                 { /* this.props.users.map(user => ( */
                  users.map(user => ( 
                    <UserItem key={user.id} user={user} />
                ))}
                
            </div>
        );
    //}
}
const userStyle = {
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gripGap: '1rem'
}

export default Users
