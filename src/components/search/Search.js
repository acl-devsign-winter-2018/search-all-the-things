import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';
import { searchApi } from '../../services/movieApi';

export default class Search extends Component {


    componentDidMount() {
        this.setState({ results: searchApi('star')});
    }

    render () {

        return(
            <div>
                <form className={styles.search} onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div></div>
                        <label> Enter your search here: 
                        <input placeholder="enter movie title"/>
                        </label>
                        <button> Search </button>
                    </fieldset>
                </form>
            </div>
        )
        
    }   
    
}