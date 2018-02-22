import React, { Component } from 'react';
import SearchAll from './search/SearchAll';





export default class App extends Component {

  state = {
    category: null,
    topic: null,
    error: null
  };


  


  render(){
   
    return (
      <div>

        <header>
          <SearchAll/>
        </header>

      </div>

    );
  }

} 