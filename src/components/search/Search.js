import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css'


export default class Search extends Component {

    state = {
        search: '', //not same as query in app
    }

    static propTypes = {
        onSearch: PropTypes.func.isRequired
    };

    handleSubmit = ( event ) => {
        event.preventDefault();
        const { search } = this.state;
        if(!search) return;

        this.props.onSearch(search)
    }

    //keeping things in sync
    handleChange =  ({ target }) => {
        this.setState({ search: target.value });
    }

    render () {
        const { search } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                <input name="search" value={search} onChange={this.handleChange}/>

                <button>Search</button>
                {/* <pre>{JSON.stringify(this.state, true, 2)}</pre> */}
                </label>
                </form>
            </div>
        );
    }
}