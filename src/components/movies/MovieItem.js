import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

export default class MovieItem extends Component {

  static propTypes = {
    Title: PropTypes.string.isRequired,
    Rated: PropTypes.string.isRequired,
    Released: PropTypes.string.isRequired,
    Runtime: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    Writer: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired
  };

  render() {
    const { Title, Rated, Released, Runtime, Genre, Director, Writer, Actors, Poster, imdbRating } = this.props;

    return (
      <div className="movie-item">
       
        <div className="poster">
          {(Poster !== 'N/A') && <img src={Poster}/>}
          {(Poster === 'N/A') && 
            <div className="missing">
              <span className="missing-fill">:(</span>
            </div>
          }
        </div>

        <div className="movie-description">
          <h3>{Title}</h3>
          <p>Rated: {Rated}</p>
          <p>Film Released: {Released}</p>
          <p>Runtime: {Runtime}</p>
          <p>Genre: {Genre}</p>
          <p>Director: {Director}</p>
          <p>Writers: {Writer}</p>
          <p>Actors: {Actors}</p>
          <p>IMDB Rating: {imdbRating}</p>
        </div>
      </div>
    );
  }
}