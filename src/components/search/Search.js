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

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const { searchTerm } = this.state;
    //     if(!searchTerm.trim()) return;
    
    //     this.props.onSearch(searchTerm);
    // };
    

    render () {
        const { movies, error } = this.state;

        return(
            <div>
                <form className={styles.search} onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div>{movies}</div>
                        <label> Enter your search here: 
                        <input placeholder="enter movie title"/>
                        </label>
                        <button> Search </button>
                    </fieldset>
                </form>
            </div>
            )
        
    }   
    
}