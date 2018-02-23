import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieItem extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired
  };

  render() {
    // const {  };

    return (
      <div>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/M/MV5BYzc4ODgyZmYtMGFkZC00NGQyLWJiMDItMmFmNjJiZjcxYzVmXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"'/>
        </div>
        <div>
          <h3>Batman Begins</h3>
          <p>Rated: PG-13</p>
          <p>Film Released: 15 Jun 2005</p>
          <p>Runtime: 140 min</p>
          <p>Genre: Action, Adventure, Thriller</p>
          <p>Director: Christopher Nolan</p>
          <p>Writers:
          <ul>
            <li>Bob Kane (characters)</li>
            <li>David S. Goyer (story)</li>
            <li>Christopher Nolan (screenplay)</li>
            <li>David S. Goyer (screenplay)</li>
          </ul>
          </p>
          <p>Actors:
          <ul>
            <li>Christian Bale</li>
            <li>Michael Caine</li>
            <li>Liam Neeson</li>
            <li>Katie Holmes</li>
          </ul>
          </p>
          <p>IMDB Rating: 8.3</p>
        </div>
      </div>
    );
  }
}