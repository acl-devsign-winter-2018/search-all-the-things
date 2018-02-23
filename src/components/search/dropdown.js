import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DropDown extends Component {

  static propTypes = {
    dropDown: PropTypes.func
  };

  render(){
    return (
      <select onChange={this.props.dropDown}>
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