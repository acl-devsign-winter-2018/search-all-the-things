import React, { Component } from 'react';
import styles from './App.css';
import Search from './Search';
import { search } from '../services/booksApi';

export default class App extends Component {

  state = {
    items: null,
    totalItems: 0,
    subject: null,
    page: 1,
    loading: false
  };

  searchBooks = () => {
    const { subject, items, totalItems } = this.state;

    this.setState({ 
      loading: true, 
      error: null
    });

    search(subject)
      .then(
        ({ items, totalItems }) => { // how/where to I extract the things from the google api response here?? 
          this.setState({ items, totalItems });
        }), 
    error => this.setState({ error })
      .then(
        this.setState({ loading: false })
      );
  };

  handleSearch = subject => {
    this.setState({ subject }, () => {
      this.searchBooks();
    });
  };

  render() {
    const { subject, totalItems } = this.state;
    return (
      <div className={styles.app}>
        <header>
          <h1>Find Your Next Favorite Book</h1>
        </header>
        <Search onSearch={this.handleSearch}/>
        <main>
          <div>{totalItems} books about {subject}</div>
          <div>Book will go here</div>
          <div>Paging will go here</div>
        </main>

      </div>
    );
  }
}