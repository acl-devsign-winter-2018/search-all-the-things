import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
// import { search } from '../services/movieApi';
import Search from '../search/Search';


export default class App extends Component {

    state = {
        results: null,
        total: 0,
        query: null,
        page: 1,
        loading: false 
    }


    render() {

        return(
            <div>
                <header>
                    Search goes here
                </header>
                <main>
                    <div>Search Summary</div>
                    <div>Paging goes here</div>
                    <div>List goes here</div>
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