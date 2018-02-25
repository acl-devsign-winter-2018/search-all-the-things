import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Search from './Search';

export default class App extends Component {

  state = {
    results: null,
    total: 0,
    query: null,
    page: 1,
    loading: false
  };

  searchBooks() {
    
  }

  handleSearch = search => {
    this.setState({ search }).then(() => {
      this.searchBooks();
    });
  };

  render() {
    const { results, total, query, page } = this.state;
    return (
      <div>
        <header>
          <h1>Find Your Next Favorite Book</h1>
        </header>
        <h1>Search here</h1>
        <main>
          <div>Search Summary</div>
          <div>Paging</div>
          <div>list</div>
        </main>

      </div>
    );
  }
}