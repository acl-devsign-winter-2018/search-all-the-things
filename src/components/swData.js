import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SwData extends Component {

    static propTypes = {
      name: PropTypes.string,
      url: PropTypes.string
    };

    render(){
      const { name } = this.props;
      
      return (
        <li>
          <Link to={`/search/${name}` }>
            { name }
          </Link>
        </li>
      );
    }
}