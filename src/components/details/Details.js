import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class Details extends Component {
    
  static propTypes = {
    searchDetail: PropTypes.object.isRequired
  };


  render() {
    const { searchDetail } = this.props;

    if(searchDetail === null) return null;

    return (
      <div>
        <Link to="/search">Search</Link>
        <pre>{JSON.stringify(searchDetail, true, 2)}</pre>
      </div>
    );
  }
}