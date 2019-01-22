import React, { Component } from 'react';
import logo from './../logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';




class header extends Component {
  


    render() {


        // if (this.state.create_btn_clicked) {
        //     // return <Redirect to="/new"/>;
        // }


    return (
      <div id="header_div">
        <div id="add_new_div"><Link to="/new"><button id="add_listing">Add Your House</button></Link></div>
        <Link to="/"><div id="logo" style={{backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center'}}/></Link>
        <div id="header_column2">lorem ipsum somyhisss</div>
      </div>
    );
  }
}

export default header;
