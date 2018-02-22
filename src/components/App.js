import React, { Component } from 'react';
import './App.css';
import { search } from '../services/movieApi';
import Search from './Search';
import Articles from './Articles';


export default class App extends Component {

    state = {
        search: '', //same as topic
        results: null, //articles
        page: 1, 
        perPage: 20, 
        totalResults: 0, 
        loading: false,
        error: null
    }

    searchMovie = () => {
        const { topic, page } = this.state;
        
        this.setState({
          loading: true,
          error: null
        });
    
        search(topic, page, PAGE_SIZE)
          .then(
            ({ Search, totalResults }) => {
              this.setState({ articles: Search, totalResults });
            },
            error => {
              this.setState({ error, articles: null });
            }
          )
          .then(() => {
            this.setState({ loading: false });
          });
    
      };

    handleSearch = (search) => {
        this.setState(search, this.search);
      };


    render() {
        const { search } = this.state;

        return (
            <div className="App">
                <header> 
                    Search Goes Here
                    <Search onSearch={this.handleSearch}/>
                </header>
            
                <main>
                    <div><h4> Search for {search}</h4></div>
                    <div>Paging Goes Here</div>
                    <div>List of Movies Goes Here</div>

                </main>
            </div>
        );

    }
}