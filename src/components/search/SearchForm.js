import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {

    static propTypes = {
        onSearch: PropTypes.func.isRequired
    };

    // handleSubmit = ( event ) => {
    //     event.preventDefault();
    //     const { search } = this.state;
    //     if(!search) return;

    //     this.props.onSearch(search)
    // }
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSearch(event.target.elements.search.value);
      };
      
    render() {
        return (
          <form
            onSubmit={this.handleSubmit}
          >
            <fieldset>
              <label>
                Search for Movies: <input name="search" placeholder="enter movie search"/>
              </label>
              <label>
                &nbsp;<button>Search</button>
              </label>
            </fieldset>
          </form>
        );
      }
}