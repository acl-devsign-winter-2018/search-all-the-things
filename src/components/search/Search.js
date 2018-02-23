import React, { Component } from 'react';
import Movies from '../movies/Movies';
import SearchForm from '../search/SearchForm';
import { search } from '../../services/movieApi';

export default class Search extends Component {
  
  state = {
    search: ''
  };
//  state = {
//     movies: null,
//     error: null
//   };

  componentDidMount() {
    this.handleSearch('star wars');
  }

  handleSearch = searchTerm => {
    this.setState({ error: null });

    search(searchTerm)
      .then(({ Search }) => {
        this.setState({ movies: Search });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
  
  render() {
    const { movies, error } = this.state;

    return (
      <div>
        <SearchForm onSearch={this.handleSearch}/>
        {error && <div>{error}</div>}
        {(!error && movies) && <Movies movies={movies}/>}
      </div>
    );
  }
}