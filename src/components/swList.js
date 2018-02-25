import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwData from './SwData';

export default class swList extends Component {
    static propTypes = {
      results: PropTypes.array.isRequired,
      category: PropTypes.string.isRequired
    };

    render(){
      const { results, category } = this.props;

      return (
        <ul>
          {results.map((data, i) => <SwData key = {i} {...data} category={category}/>)}
        </ul>
      );
    }
}