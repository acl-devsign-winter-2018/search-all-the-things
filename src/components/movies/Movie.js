import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './movie.css';

export default class Movie extends Component {

  static propTypes = {
    imdbID: PropTypes.string,
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
    Type: PropTypes.string,
  };

  render() {
    const { Title, Year, imdbID, Type, Poster } = this.props;

    if(Poster === 'N/A') {
      return (
        <li> 
          <Link className="missing" to={`/movies/${imdbID}`} >
            <span className="missing-fill">:(</span>
            <h3>{Title}</h3>
            <p>Year made: {Year}</p>
            <p>{Type} | IMDB ID: {imdbID}</p>
          </Link>
        </li>
      );
    }
    
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