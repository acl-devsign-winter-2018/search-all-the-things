import React, { Component } from 'react';
import { search } from '../../services/starWarsApi.js';
import Search from './search';
import SwList from '../swList';
import Dropdown from './dropdown';
import { Link } from 'react-router-dom';





export default class SearchAll extends Component {

  state = {
    category: null,
    topic: null,
    error: null
  };


  searchSWAPI = () => {
    this.setState({
      results: null,
      loading: true,
      error: null,
    });
  

    const { topic } = this.state; 

    search(topic).then(
      ({ results }) => 
      { this.setState({ results });
      },
      error => {
        this.setState({ error, results: null });
      })
      .then(() => {
        this.setState({ loading: false });
      });
    
  }; 
  
  handleSearch = topic => {
    this.setState({ topic }, this.searchSWAPI);
  };

  handleDropdown  = category => {
    this.setState({ category });
  };


  render(){
    const { results, loading } = this.state;
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <header>
          <Search onSearch={this.handleSearch}/>
        </header>
        <div>
          <Dropdown onChange={this.handleDropdown}/>
        </div>
        <div className="loading">{loading && 'Loading...'}</div>
      
        <div>
          {results && <SwList results={results}/>}
        </div>
          
      </div>

    );
  }

} 