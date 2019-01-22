import React, { Component } from 'react';
import logo from './../logo.svg';
// import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class houseTile extends Component {
 
 
  render() {
   
    const { house } = this.props


    return (
        <div className="house">
        <Link to={'/house/'+house._id}><div className="house__sprite" style={{backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div></Link>
           <p className="house__name">{house.name}</p>

        </div>
    );
  }
}

export default houseTile;
