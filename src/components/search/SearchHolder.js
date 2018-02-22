import React, { Component } from 'react';
import Search from './Search';
import Movies from '../movie/Movies';
import { search } from '../../services/movieApi';
import { filterSearch } from '../../services/movieApi';
import Paging from '../paging/Paging';
import loadingImage from './loading.gif';

export default class SearchHolder extends Component {
  
  state = {
    movies: null,
    totalResults: 0,
    title: null,
    page: 1,
    loading: false,
    error: null,
    filter: null
  };

  searchTitles = () => {
    this.setState({
      loading: true,
      error: null
    });

    const { title, page, filter } = this.state;

    if(filter) {
      filterSearch(title, page, filter) //search filtered
        .then(
          ({ Search, totalResults }) => { //return results 
            const convertedResults = parseInt(totalResults);
            this.setState({ movies: Search, totalResults: convertedResults });
          },
          error => this.setState({ error }))
        .then(() => { //remove loading
          this.setState({ loading: false });
        });
    } else {
      search(title, page) //search movies API
        .then(
          ({ Search, totalResults }) => { //return results 
            const convertedResults = parseInt(totalResults);
            this.setState({ movies: Search, totalResults: convertedResults });
          },
          error => this.setState({ error }))
        .then(() => { //remove loading
          this.setState({ loading: false });
        });
    }
  };

  handleSearch = title => {
    this.setState({ title, filter: null, page: 1 }, this.searchTitles);
  };

  handleFilter = ({ target }) => {
    const filter = target.textContent;
    this.setState({ filter, page: 1 }, this.searchTitles);
  };

  handlePrev = () => this.handlePaging(-1);
  handleNext = () => this.handlePaging(1);

  handlePaging = increment => {
    this.setState(
      prev => ({ page: prev.page + increment }), //increment page
      this.searchTitles //then search new page
    );
  };
  
  render() {
    const { movies, error, loading, page, title, totalResults } = this.state;

    const resultsHeader = <div className="results-string">Search for &quot;{title}&quot; found {totalResults} matches</div>;
    // let noSearch;
    // if(!movies && title) noSearch = <div>No results found!</div>;

    return (
      <div id="search-holder">
        {loading && (
          <div className="loading">
            <img src={loadingImage}/>
          </div>
        )}
        <section id="search">
          <Search onSearch={this.handleSearch}/>
          {movies && resultsHeader}
          {(!error && movies) && (
            <div className="filter" onClick={this.handleFilter}>
              <button>Movie</button>
              <button>Series</button>
            </div>
          )}
          {error && <pre>{error}</pre>}
        </section>
        <section id="results">
          {movies && (
            <div>
              <Paging totalResults={totalResults}
                page={page}
                onPrev={this.handlePrev}
                onNext={this.handleNext}/>
              <Movies movies={movies}/>
              <Paging totalResults={totalResults}
                page={page}
                onPrev={this.handlePrev}
                onNext={this.handleNext}/>
            </div>
          )}
        </section>
      </div>
    );
  }
}

