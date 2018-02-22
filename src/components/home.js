import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  render(){
    return (
      <div>
        <h1>WELCOME TO STAR WARS SEARCH</h1>
        <Link to={'/search'}>Search</Link>
      </div>
    );
    
  }
}