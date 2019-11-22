import React, {Component} from 'react';

import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Brands from './components/Brands'

import Home from './components/Home'

import AllProducts from './components/AllProducts'

import Results from './components/Results'





class App extends Component {

  

 

  render(){

 

    return(

      <div className="App">

        <Router>

          <Route exact path="/" component={Home}/>

          <Route path="/brands" component={Brands}/>

          <Route path="/all-products" component={AllProducts}/>

          <Route path="/results" component={Results}/>

        </Router>

      </div>

    )

  }

}

 

export default App