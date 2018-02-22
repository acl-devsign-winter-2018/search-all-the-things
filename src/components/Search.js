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
        const { search } = this.state;
        if(!search.trim()) return;
        this.props.onSearch( search );
    };

    handleChange = ({ target }) => {
        this.setState({ search: target.value });
      };


    // handleSources = sources => {
    //     this.setState({ sources });
    //   };

    
    render () {
        const { search } = this.state;

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>{search}</div>
                    <label> Enter your search here: 
                    <input value={search} onChange={this.handleChange}/>
                    </label>
                    <button> Search </button>
                </form>
            </div>
        )
        
    }   
    
}