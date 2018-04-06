import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {users: [], orders:[]}

  componentDidMount() {
    fetch('/api/users',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(res => res.json())
      .then(users => this.setState({ users }));

      fetch('/api/orders',{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
        .then(res => res.json())
        .then(orders => this.setState({ orders }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.local.password}>{user.local.email}</div>

        )}
        <h1>Orders</h1>
        {this.state.orders.map(orders =>
          <div key={orders.order}>{orders.order},{orders.size}</div>

        )}
      </div>
    );
  }
}

export default App;
