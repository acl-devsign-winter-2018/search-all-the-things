import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './movie-detail.css';


export default class MovieDisplay extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired
  };

  render() {

    const { Title, Year, Rated, Genre, Director, Plot, BoxOffice, Poster } = this.props.movie;

    return (
      <div className="movie-detail">
        <Link to="/">New Search</Link>
        <h2>{Title}</h2>
        <div className="grid-container">
          {Poster && <img src={Poster}/>}
          <div className="stats-container">
            {Director && <p>Directed By: {Director}</p>}
            {Year && <p>Released: {Year}</p>}
            {Rated && <p>Rating: {Rated}</p>}
            {Genre && <p>Genre: {Genre}</p>}
            {BoxOffice && <p>Box Office: {BoxOffice}</p>}
          </div>
        </div>
        {Plot && <p>Summary: {Plot}</p>}
      </div>
    );
  }
}