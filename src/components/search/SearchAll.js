import React, { Component } from 'react';
import { search } from '../../services/starWarsApi.js';
import Search from './search';
import SwList from '../swList';
import Dropdown from './dropdown';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';





export default class SearchAll extends Component {

  static propTypes = {
    category: PropTypes.string,
    handleDropdown: PropTypes.func      
    
  };

  state = {
    topic: null,
    error: null
  };


  searchSWAPI = () => {
    this.setState({
      results: null,
      loading: true,
      error: null
    });
  

    const { topic } = this.state; 


    search(topic, this.props.category).then(
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

  

  render(){
    const { results, loading } = this.state;
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <header>
          <Search onSearch={this.handleSearch}/>
        </header>
        <div>
          <Dropdown dropDown={ this.props.handleDropdown }/>
        </div>
        <div className="loading">{loading && 'Loading...'}</div>
      
        <div>
          {results && <SwList results={results} category={this.state.category}/>}
        </div>
          
      </div>

    );
  }

} 