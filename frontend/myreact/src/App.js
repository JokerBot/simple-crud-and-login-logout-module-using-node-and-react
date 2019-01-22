import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import houses from './components/houses'; 
import houseDetailed from './components/houseDetailed';
import Header from './components/header';
import NewHouse from './components/newHouse';
import Login from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



class App extends Component {
  render() {
    return (
    <div>
      
      <BrowserRouter>
        <div>
         <Header/>
         <Route path="/" exact component={houses} />
         <Route path="/house/:id" component={houseDetailed} />
         <Route path="/new" component={NewHouse}/>
         <Route path="/login" component={Login}/>


        </div>
      </BrowserRouter>
    </div> 
    );
  }
}

export default App;
