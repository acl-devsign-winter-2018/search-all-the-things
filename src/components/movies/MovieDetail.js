import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovie } from '../../services/omdbApi';
import MovieItem from './MovieItem';

export default class MovieDetail extends Component {

  static propTypes = {
    imdbID: PropTypes.string.isRequired
  };

  state = {
    movie: null
  };

  componentDidMount() {
    getMovie(this.props.imdbID)
      .then(movie => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;

    if(movie === null) return null;

    return (
      <div>
        <MovieItem {...movie} />
      </div>
    );
  }
}