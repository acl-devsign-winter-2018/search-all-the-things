import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

export default class Movies extends Component {

  static propTypes = {
    movies: PropTypes.array.isRequired
  };

  render() {
    const { movies } = this.props;

    return (
      <ul className="result-grid">
        {movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>)}
      </ul>
    );
  }
}