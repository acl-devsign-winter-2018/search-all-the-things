import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { search } from '../../services/movieApi';
import Search from '../search/Search';


export default class App extends Component {

    state = {
        title: null,
        // total: 0,
        topic: null,
        page: 1,
        loading: false 
    }

    searchMovies () {
        search(this.state.topic)
            .then(response => {
                this.setState({
                    title: response.title
                })
            })

            //TODO
            .catch( err => console.log(err));
    }

    handleSearch = topic => {
        this.setState({ topic }, () => {
            this.searchMovies();
        })
    }


    render() {
        const { title } = this.state;

        return(
            <div>
                <header>
                    <Search onSearch={this.handleSearch}/>
                    Search goes here
                </header>
                <main>
                    <div>Search Summary</div>
                    <div>Paging goes here</div>
                    <div>List goes here: {title ? title : 'no results'}
                    </div>
                </main>
            </div>
        )
        
    }
}
                // return (
                //     <Router>
                //         <div>
                //             <h1>Header goes here</h1>
                //             <main>
                //                 <Switch>
                //                     <Route exact path='/' render={({match}) => {
                //                         return <div>Home here</div>}} /> 
                //                     {/* () => <div> returns automatically</div> */}
                //                     <Route path="/search" component={Search}/>
                                
                //                 </Switch>
                //             </main>
                //         </div>
                //     </Router>
                // );