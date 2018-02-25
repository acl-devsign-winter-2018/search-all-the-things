import React, { Component } from 'react';
import styles from './App.css';
import Search from './Search';
import { search } from '../services/booksApi';

export default class App extends Component {

  state = {
    books: null,
    total: 0,
    subject: null,
    page: 1,
    loading: false
  };

  searchBooks() {
    search(this.state.subject)
      .then(response => {
        this.setState({
          books: response.items, //cannot read property items of undefined. 
          total: response.totalItems
        });
      })
      .catch(err => console.log(err));
  }

  handleSearch = (subject) => {
    this.setState({ subject }, () => {
      this.searchBooks();
    });
  };

  render() {
    const { books, total, subject, page } = this.state;
    return (
      <div className={styles.app}>
        <header>
          <h1>Find Your Next Favorite Book</h1>
        </header>
        <Search onSearch={this.handleSearch}/>
        <main>
          <div>{total}</div>
          <div>{books}</div>
          <div>Number of Books: {total}</div>
        </main>

      </div>
    );
  }
}