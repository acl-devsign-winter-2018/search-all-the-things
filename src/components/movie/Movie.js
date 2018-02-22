
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';
import { Link } from 'react-router-dom';

export default class Movie extends Component {

  static propTypes = {
    imdbID: PropTypes.string,
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
  };

  render() {
    const { Title, Year, Poster, imdbID } = this.props;

    if(Poster === 'N/A') {
      return (
        <li className="posters">
          <Link to={`/movies/${imdbID}`}>
            <p className="missing-poster">?</p>
            <h2>{Title}</h2>
            <p>{Year}</p>
          </Link>
        </li>
      );
    }
    
    return (
      <li className="posters">
        <Link to={`/movies/${imdbID}`}>
          <img src={Poster}/>
          <h2>{Title}</h2>
          <p>{Year}</p>
        </Link>
      </li>
    );
  }
}