import React, { Component } from 'react';
import '../App.css';
import Articles from '../movies/Articles';
import Paging from '../paging/Paging';
import SearchForm from '../search/SearchForm';
import { search } from '../../services/omdbApi';

const PAGE_SIZE = 10;

export default class Search extends Component {

  state = {
    articles: null,
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
          this.setState({ articles: Search, totalResults });
        },
        error => {
          this.setState({ error, articles: null });
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
    const { articles, topic, page, totalResults, loading, error } = this.state;

    return (
      
      <div>
        <SearchForm onSearch={this.handleSearch}/>
       
        <div className="search-header">
          {articles ? 
            <div>
              <h5>Search for &quot;{topic}&quot; found {totalResults} matches</h5>
            </div> 
            : 
            <div></div>
          }
        </div>

        <div>{loading && 'Loading...'}</div>
        <pre>{error && error.message}</pre>

        {articles && (
          <div>
            <Paging totalResults={totalResults}
              page={page} 
              perPage={PAGE_SIZE} 
              onPrev={this.handlePrev} 
              onNext={this.handleNext}/>

            <Articles articles={articles}/>
          </div>
        )}
      </div>
      
    );
  }

}