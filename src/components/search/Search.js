import React, { Component } from 'react';
import styles from './Search.css';
import { search } from '../../services/movieApi';

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


    render () {

        return(
            <div>
                <form className={styles.search} onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div></div>
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