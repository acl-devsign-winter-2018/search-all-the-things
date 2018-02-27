import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css'
import Movies from '../movies/Movies';
import { search } from '../../services/movieAPI';
import SearchForm from '../search/SearchForm';



const PAGE_SIZE = 10;

export default class Search extends Component {

    state = {
        results: [],
        error: null,
        page: 1
    }


    // state = {
    //     title: null,
    //     topic: null,
    //     results: [],
    //     page: 1,
    //     loading: false,
    //     search: ''
    // }


    static propTypes = {
        onSearch: PropTypes.func
    };
    //saying there will never be a search componant that doesnt have onSearch!


    //keeping things in sync
    handleChange =  ({ target }) => {
        this.setState({ search: target.value });
    }

   
    searchMovies () {
        const { topic, page } = this.state;

        this.setState({ loading: true, error: null });

        search(topic, page)
            .then(response => {
                this.setState({
                    results: response.Search,
                    totalResults: response.totalResults
                })
            })
            .then(() => {
                this.setState({ loading: false })
            })

            //TODO
            .catch( err => console.log(err));
    }

    handleSearch = topic => {
        this.setState({ topic }, () => {
            this.searchMovies();
        })
    }

    handleNext = () => this.handlePaging(1);
    handlePrev = () => this.handlePaging(-1);

    handlePaging = incr => {
        this.setState(
        prev => ({ page: prev.page + incr }),
        this.searchMovies 
        );
    } 

    render() {
        const { error, loading, movies, results, topic, page, search, totalResults } = this.state;

        const ofXPages = Math.ceil(totalResults/10);

        return(
            <div className="app">
                <header id="header">
                    <h1>Movie Search App</h1>
                        <div>
                            <SearchForm onSearch={this.handleSearch}/>

                            {results && (
                            <div>
                                <Movies results={results}/>
                            </div>
                            )}

                        </div>
                </header>
                <main id="main">
                    
                    <div className="search-header">
                        <h4>Search for &quot;{topic}&quot; found {totalResults} matches</h4>
                        
                    </div>

                    <div>{loading && 'Loading...'}</div>
                    
                    <div>
                        <div> This is page {page} of {ofXPages}</div>
                        <button onClick={this.handlePrev} >Previous page</button>
                        <button onClick={this.handleNext} >Next page</button>
                    </div>
                </main>
            </div>
        );
        
    }
    
}

