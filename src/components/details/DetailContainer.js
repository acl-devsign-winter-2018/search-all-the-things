import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { search } from '../../services/starWarsApi';
import Details from './Details';

export default class DetailContainer extends Component {
    
    static propTypes = {
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    };
  
      state = {
        searchDetail: null
      };
  
      componentDidMount(){
        search(this.props.name, this.props.category)
          .then(searchDetail => this.setState({ searchDetail }));
      }

      render() {
        const { searchDetail } = this.state;

        if(searchDetail === null) return null;
  
        return <Details searchDetail={searchDetail}/>;
      }

}