import React, { Component } from 'react';
import styles from './Search.css';
import { search } from '../../services/movieApi';
import Movies from '../movies/Movies';
import SearchForm from '../search/SearchForm';

export default class Search extends Component {

    state = {
        movies: null,
        error: null
    }

    componentDidMount() {
        this.handleSearch('star')
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

    // handleSubmit(event) {
    //     event.preventDefault();
    //     return handleSearch();
    // }


    render () {
        const { movies, error } = this.state;

        return(
         <div>
             <SearchForm onSearch={this.handleSearch}/>
        </div>
        )
        
    }   
    
}