import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default class Home extends Component {

  render(){
    return (
      <div className='homeDiv'>
        <Link className='link' to={'/search'}>Search The Universe</Link>
      </div>
    );
    
  }
}