import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SwData extends Component {

    static propTypes = {
      article: PropTypes.object
    };

    render(){
      const { article } = this.props;

      return (
        <li>
          { article.name}
        </li>
      );
    }
}