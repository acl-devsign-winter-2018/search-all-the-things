import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {

    state = {
        search: '' //not the same as query up in app
    }

    handleSubmit(target) {

    }

    handleChange =  ({ target }) => {
        this.setState({ search: target.value });
    }

    render () {
        const { search } = this.state;
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>{search}</div>
                <input value={search} onChange={this.handleChange}/>

                </form>
            </div>
        );
    }
}