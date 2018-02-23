import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieItem extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired
  };

  render() {
    const { Title, Rated, Released, Runtime, Genre, Director, Writer, Actors, Poster, imdbRating } = this.props.movie;

    return (
      <div>
        <div>
          <img src={Poster}/>
        </div>
        <div>
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