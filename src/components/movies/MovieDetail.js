import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovie } from '../../services/omdbApi';
import { Link } from 'react-router-dom';
import MovieItem from './MovieItem';

export default class MovieDetail extends Component {

  static propTypes = {
    imdbID: PropTypes.string.isRequired
  };

  state = {
    movie: null
  }

  componentDidMount() {
    getMovie(this.props.imdbID)
      .then(movie => this.setState({ movie }));

    console.log(getMovie);
  }

  render() {
    const { movie } = this.state;

    if(movie === null) return null;

    return (
      <div>
        <Link to="/search">New Search</Link>
        <MovieItem movie={movie} />
      </div>
    );
  }
}