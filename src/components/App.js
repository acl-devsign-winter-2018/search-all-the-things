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
        ({ items, totalItems }) => {  
          this.setState({ items, totalItems, loading: false });
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
    const { subject, totalItems, items, loading } = this.state;
    return (
      <div className={styles.app}>

        <header>
          <h1>Find Your Next Favorite Book</h1>
        </header>

        <Search onSearch={this.handleSearch}/>
        
        <main>
          <div>{loading && <img src="https://media.giphy.com/media/l0HlSF89is7bCAjte/giphy.gif"/>}</div>
          {items && (
            <div>
              <h2 className="total">{totalItems} books about {subject}</h2>
              <Books items={items}/>
              <div>Paging will go here</div>
            </div>
          )}
        </main>

      </div>
    );
  }
}