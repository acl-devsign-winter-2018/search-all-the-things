import React, { Component } from 'react';
import styles from './Search.css';
import { search } from '../../services/movieApi';

export default class Search extends Component {

    state = {
        movies: null,
        error: null
    }

    componentDidMount() {
        this.handleSearch('star wars')
    }

    handleSearch = searchTerm => {
        this.setState({ error: null });

        search(searchTerm)
            .then(({ Search }) => {
                this.setState({ movies: Search });
            })
            .catch(error => {
                this.setState({ error });
            });
    };


    render () {
        const { movies, error } = this.state;

        return(
            <div>
            {/* <SearchForm onSearch={this.handleSearch}/> */}
          </div>
        );   
    }    
}