import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';




class Login extends Component {
  




    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          message: ''
        };
      }
      onchangefunc = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
    
      onsubmitfunc = (e) => {
        e.preventDefault();
    
        const { email, password } = this.state;

        const user={
	                       "email": email,
                           "password":password
                           
                   };        
    
        axios.post('/users/login', {user})
          .then((result) => {
              
            localStorage.setItem('jwtToken', result.data.user.token);
            this.setState({ message: '' });
            this.props.history.push('/')
          })
          .catch((error) => {
            if(error.response.status === 401) {
              this.setState({ message: 'Login failed. Username or password not match' });
            }
          });
      }

    render() {


       

    return (
      <div id="login_div">
      <form onSubmit={this.onsubmitfunc}> 
       <label>Email:</label> <input type="text" name="email" value={this.state.email} onChange={this.onchangefunc} />
       <label>Password:</label> <input type="password"  name="password" value={this.state.password} onChange={this.onchangefunc} />
       <button type="submit" value="Login"/>
       </form>
      </div>
    );
  }
}

export default Login;
