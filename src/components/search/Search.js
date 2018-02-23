import React, { Component } from 'react';
import '../App.css';
import Movies from '../movies/Movies';
import Paging from '../paging/Paging';
import SearchForm from '../search/SearchForm';
import { search } from '../../services/omdbApi';

const PAGE_SIZE = 10;

export default class Search extends Component {

  state = {
    movies: null,
    total: 0,
    topic: null,
    page: 1,
    totalResults: 0,
    loading: false,
    error: null
  };

  searchMovie = () => {
    const { topic, page } = this.state;
    
    this.setState({
      loading: true,
      error: null
    });

    search(topic, page, PAGE_SIZE)
      .then(
        ({ Search, totalResults }) => {
          this.setState({ movies: Search, totalResults });
        },
        error => {
          this.setState({ error, movies: null });
        }
      )
      .then(() => {
        this.setState({ loading: false });
      });

  };

  handleSearch = topic => {
    this.setState({ topic }, this.searchMovie);
  };

  handlePrev = () => this.handlePaging(-1);
  handleNext = () => this.handlePaging(1);

  handlePaging = incr => {
    this.setState(
      prev => ({ page: prev.page + incr }),
      this.searchMovie
    );
  };

  render() {
    const { movies, topic, page, totalResults, loading, error } = this.state;

    return (
      
      <div>
        <SearchForm onSearch={this.handleSearch}/>
       
        <div className="search-header">
          {movies ? 
            <div>
              <h5>Search for &quot;{topic}&quot; found {totalResults} matches</h5>
            </div> 
            : 
            <div></div>
          }
        </div>

        <div>{loading && 'Loading...'}</div>
        <pre>{error && error.message}</pre>

        {movies && (
          <div>
            <Paging totalResults={totalResults}
              page={page} 
              perPage={PAGE_SIZE} 
              onPrev={this.handlePrev} 
              onNext={this.handleNext}/>

            <Movies movies={movies}/>

            <Paging totalResults={totalResults}
              page={page} 
              perPage={PAGE_SIZE} 
              onPrev={this.handlePrev} 
              onNext={this.handleNext}/>
          </div>
        )}
      </div>
      
    );
  }

}