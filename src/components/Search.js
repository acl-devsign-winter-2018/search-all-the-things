import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Search.css';

export default class search extends Component {
    state = {
        search: 'bears',
        sources: []
    };

    static propTypes = {
        onSearch: PropTypes.func.isRequired
    };

    
    handleSubmit = (event) => {
        if(!this.state.search) return;
        this.props.onSearch({ ...this.state });
    };

    handleChange = ({ target }) => {
        this.setState({ search: target.value });
      };


    handleSources = sources => {
        this.setState({ sources });
      };

    
    render () {
        const { search } = this.state;

        return(

            <form onSubmit={this.handleSubmit}>
                <div>{search}</div>
                <label> Enter your search here: </label>
                <input value={search} onChange={this.handleChange}/>
                <button> Search </button>
            </form>
        )
        
    }   
    
}