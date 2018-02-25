import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import styles from './Search.css';

export default class Search extends Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  state = {
    subject: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { subject } = this.state;
    if(!subject.trim()) return;
    this.props.onSearch(subject);
  };

  handleChange = ({ target }) => {
    this.setState({ subject: target.value });
  };

  render() {

    const { subject } = this.state;
    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <label>
          Search for books:
          <input value={subject} onChange={this.handleChange}/>
        </label>
        <button>Search</button>

      </form>
    );
  }
}