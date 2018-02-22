import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovie } from '../../services/movieApi';
import { Link } from 'react-router-dom';
import './movie.css';

export default class MovieDetail extends Component {

  // static propTypes = {
  //   imdbID: PropTypes.string.isRequired
  // };

  state = {
    movie: {
      'Title': 'Requiem for a Dream',
      'Year': '2000',
      'Rated': 'R',
      'Released': '15 Dec 2000',
      'Runtime': '102 min',
      'Genre': 'Drama',
      'Director': 'Darren Aronofsky',
      'Writer': 'Hubert Selby Jr. (based on the book by), Hubert Selby Jr. (screenplay), Darren Aronofsky (screenplay)',
      'Actors': 'Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans',
      'Plot': 'The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.',
      'Language': 'English',
      'Country': 'USA',
      'Awards': 'Nominated for 1 Oscar. Another 33 wins & 62 nominations.',
      'Poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      'Ratings': [
        {
          'Source': 'Internet Movie Database',
          'Value': '8.3/10'
        },
        {
          'Source': 'Rotten Tomatoes',
          'Value': '78%'
        },
        {
          'Source': 'Metacritic',
          'Value': '68/100'
        }
      ],
      'Metascore': '68',
      'imdbRating': '8.3',
      'imdbVotes': '644,352',
      'imdbID': 'tt0180093',
      'Type': 'movie',
      'DVD': '22 May 2001',
      'BoxOffice': '$2,546,851',
      'Production': 'Artisan Entertainment',
      'Website': 'http://www.requiemforadream.com',
      'Response': 'True'
    }
  };

  // componentDidMount() {
  //   getMovie(this.props.imdbID)
  //     .then(movie => this.setState({ movie }));
  // }

  render() {
    const { Title, Year, Rated, Genre, Director, Plot, BoxOffice, Poster } = this.state.movie;

    const { movie } = this.state;

    if(movie === null) return null;

    return (
      <div className="movie-detail">
        {/* <Link to="/search">New Search</Link> */}
        <h2>{Title}</h2>
        {Poster && <img src={Poster}/>}
        <div className="stats-container">
          {Director && <p>Directed By: {Director}</p>}
          {Year && <p>Released: {Year}</p>}
          {Rated && <p>Rating: {Rated}</p>}
          {Genre && <p>Genre: {Genre}</p>}
          {BoxOffice && <p>Box Office: {BoxOffice}</p>}
        </div>
        {Plot && <p>Summary: {Plot}</p>}
      </div>
    );
  }
}