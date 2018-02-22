import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

export default class SearchForm extends Component {
  
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  state = {
    search: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state;
    if(!search.trim()) return;
    console.log({ search });

    this.props.onSearch(search);
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  render() {

    const { search } = this.state;

    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input name="search" placeholder="Movies" value={search} onChange={this.handleChange}/>
        </label>
        <button>Search</button>
      </form>
    );
  }
}