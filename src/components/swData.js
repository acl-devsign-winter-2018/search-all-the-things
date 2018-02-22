import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SwData extends Component {

    static propTypes = {
      name: PropTypes.string
    };

    render(){
      const { name } = this.props;

      return (
        <li>
          { name }
        </li>
      );
    }
}