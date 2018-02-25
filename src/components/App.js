import React, { Component } from 'react';
import styles from './App.css';
import Search from './Search';
import { search } from '../services/booksApi';
import Books from './Books';

export default class App extends Component {

  state = {
    items: null,
    totalItems: 0,
    subject: null,
    page: 1,
    loading: false
  };

  searchBooks = () => {
    const { subject } = this.state;

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

  handleSearch = search => {
    this.setState(search, this.searchBooks);
  };

  render() {
    const { subject, totalItems, items } = this.state;
    return (
      <div className={styles.app}>

        <header>
          <h1>Find Your Next Favorite Book</h1>
        </header>

        <Search onSearch={this.handleSearch}/>
        
        <main>
          <div>{totalItems} books about {subject}</div>
          {items && <Books items={items}/>}
          <div>Paging will go here</div>
        </main>

      </div>
    );
  }
}