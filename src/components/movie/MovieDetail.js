import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { movieDetail } from '../../services/movieApi';
import { Link } from 'react-router-dom';
import './movie.css';

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

    console.log(this.state.movie);
    
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