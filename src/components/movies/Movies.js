import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

export default class Movies extends Component {

    static propTypes = {
        results: PropTypes.array.isRequired
    };

    render() {
        const { results } = this.props;

        return (
            <ul className="results-grid">
                {results.map((movie, index) => {
                    return <Movie key={index} movie={movie}/>
                })}

            </ul>

        )
    }
}