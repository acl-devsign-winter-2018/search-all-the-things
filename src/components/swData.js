import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SwData extends Component {

    static propTypes = {
      name: PropTypes.string,
      url: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string
    };

    render(){
      const { name,  title } = this.props;

      return (
        <li>
          <Link to={`/search/${name ? name : title}` }>
            { name ? name : title }
          </Link>
        </li>
      );
    }
}