import React, { Component } from 'react';
import styles from './App.css';
import Search from '../search/Search';
import { search } from '../../services/booksApi';
import Books from '../books/Books';
import Paging from '../paging/Paging';

export default class App extends Component {

  state = {
    items: null,
    totalItems: 0,
    subject: null,
    page: 1,
    loading: false,
    startIndex: 0 
  };

  searchBooks = () => {
    const { subject, startIndex } = this.state;

    this.setState({ 
      loading: true, 
      error: null
    });

    search(subject, startIndex)
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

  handlePrev = () => this.handlePaging(-1, -10);
  handleNext = () => this.handlePaging(1, 10);

  handlePaging = (incr, indexChange) => {
    this.setState(prev => ({ 
      page: prev.page + incr, 
      startIndex: prev.startIndex + indexChange 
    }),
    this.searchBooks
    );
  };

  render() {
    const { subject, totalItems, items, loading, page } = this.state;
    return (
      <div className={styles.app}>

        <header>
          <h1>Find Your Next Favorite Book</h1>
        </header>

        <Search onSearch={this.handleSearch}/>
        
        <main>
          <div>{loading && <img src="https://media.giphy.com/media/l0HlSF89is7bCAjte/giphy.gif"/>}</div>
          {/* what do I need to tell the below line to get it to render message only after searching */}
          <div>{(subject && totalItems === 0) && (<p>Found no books about {subject}.</p>)}</div> 
          {items && (
            <div>
              <h2 className="total">{totalItems} books about {subject}</h2>
              <div>
                <Paging totalItems={totalItems}
                  page={page}
                  onPrev={this.handlePrev}
                  onNext={this.handleNext}/>
              </div>
              <Books items={items}/>
            </div>
          )}
        </main>

      </div>
    );
  }
}