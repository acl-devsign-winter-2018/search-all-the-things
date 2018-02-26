import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Movie extends Component {

    static propTypes = {
        imdbID: PropTypes.string,
        Poster: PropTypes.string,
        Title: PropTypes.string,
        Year: PropTypes.string
    }

    render() {

        const { imdbID, Poster, Title, Year } = this.props.movie;
        return (
            <li>
                <h3>{Title}</h3>
                <p>Released {Year}</p>
                <p><img src={Poster}></img></p>
                <p>{imdbID}</p>
            </li>

        )
    }
}