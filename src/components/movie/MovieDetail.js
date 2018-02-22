import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { movieDetail } from '../../services/movieApi';
import './movie-detail.css';
import MovieDisplay from './MovieDisplay';

export default class MovieDetail extends Component {

  static propTypes = {
    imdbID: PropTypes.string.isRequired
  };

  state = {
    movie: null
  };

  componentDidMount() {
    movieDetail(this.props.imdbID)
      .then(movie => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;
    if(movie === null) return null;

    return (
      <MovieDisplay movie={ movie }/>
    );
  }
}