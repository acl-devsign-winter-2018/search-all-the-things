import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { search } from '../../services/starWarsApi';
import { Link } from 'react-router-dom';


export default class Details extends Component {
    
  static propTypes = {
    name: PropTypes.string.isRequired
  };

   state = {
     searchDetail: null
   };

  // componentDidMount(){
  //   search(this.props.name)
  //     .then(searchDetail => this.setState({ searchDetail }));
  // }

   render() {
     const { searchDetail } = this.state;

     if(searchDetail === null) return null;

     return (
       <div>
         <Link to="/search">Search</Link>
         <pre>{JSON.stringify(searchDetail, true, 2)}</pre>
       </div>
     );
   }

}