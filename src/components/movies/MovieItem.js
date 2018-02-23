import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

export default class MovieItem extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired
  };

  render() {
    const { Title, Rated, Released, Runtime, Genre, Director, Writer, Actors, Poster, imdbRating } = this.props.movie;

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