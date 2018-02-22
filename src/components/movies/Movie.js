import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Movie extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired
  };

  render() {
    const { Title, Year, imdbID, Type, Poster } = this.props.movie;

    return (
      <li> 
        <Link to={`/movies/${imdbID}`}>
          <img src={Poster}/>
          <h3>{Title}</h3>
          <p>Year made: {Year}</p>
          <p>{Type} | IMDB ID: {imdbID}</p>
        </Link>
      </li>
    );
  }
}