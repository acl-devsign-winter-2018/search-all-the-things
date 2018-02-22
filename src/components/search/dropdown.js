import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DropDown extends Component {

  static propTypes = {
    onSearch: PropTypes.func
  };

  state = {
    category: 'people'
  };

  handleCategory(){
    const { category } = this.state;
    this.props.onSearch(category);
  }

  handleChange = ({ target }) => {
    this.setState({ category: target.value });
  };
  

  render(){
    return (
      <select onChange={this.handleChange}>
        <option>People</option>
        <option>Films</option>
        <option>Planets</option>
        <option>Species</option>
        <option>Starships</option>
        <option>Vehicles</option>
      </select>
    );
  }
}