import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './SearchForm.css';
import { search } from './Search'

export default class SearchForm extends Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  state = {
    search: ''
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.onSearch(event.target.elements.search.value);
  // };
  handleSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state;
    if(!search.trim()) return;

    this.props.onSearch(search);
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  render() {
    const { search } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <fieldset>
          <label>
            Search for Movies: <input name="search" value={search} onChange={this.handleChange} placeholder="enter movie search"/>
          </label>
          <label>
            &nbsp;<button>Search</button>
          </label>
        </fieldset>
      </form>
    );
  }
}