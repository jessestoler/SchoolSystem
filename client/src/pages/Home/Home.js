import React, { Component } from "react";
import { connect } from 'react-redux';
import Student from '../Student/Student';
import Teacher from '../Teacher/Teacher';
import Admin from '../Admin/Admin'
import UserService from '../../service/user.service';

class Home extends Component {
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.login = this.login.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  userService = new UserService()

  handleKeyDown(e) {
    if (e.key === 'Enter') {
        this.login();
    }
  }

  handleInput(e) {
    console.log(this.props)
    this.props.dispatch( { type: 'handleUsername', username: e.target.value } )
  }

  login = () => {
    console.log(this.props)
    this.userService.login(this.props.username).then(res => {

        console.log(res.data.role);
        console.log(res.data.username)
        this.props.dispatch( { type: 'login', username: res.data.username, user: res.data})
    });
  };


  handleLogout = () => {
    console.log(this.props)
    this.userService.logout().then(res =>
      {
        this.props.dispatch({ type: 'logout', username: '', user: null})
      })
  }


  render() {

    if (this.props.user) {
      if (this.props.user.role === 'student') {
        return (
          <>
            <p><button id="logout" onClick={this.handleLogout}>Logout</button></p>
            <Student/>
          </>
        )
      }
      else if (this.props.user.role === 'teacher') {
        return (
          <>
            <p><button id="logout" onClick={this.handleLogout}>Logout</button></p>
            <Teacher/>
          </>
        )
      }
      else if (this.props.user.role === 'admin') {
        return (
          <>
            <p><button id="logout" onClick={this.handleLogout}>Logout</button></p>
            <Admin/>
          </>
        )
      }
      else {
        return (
          <>
            <h1>Something's Wrong</h1>
          </>
        )
      }
    }
    else {
      return (
        <center>
          <div id="title" style={{marginTop:54}}><h1>School System</h1></div>
          <div id="content">
            <p>Username</p>
            <input type="text" value={this.props.username}
            onChange={ this.handleInput } onKeyDown={ (e) => this.handleKeyDown(e) }></input>
            <p>Password</p>
<<<<<<< HEAD
            <input type="password" name="password" onKeyDown={ (e) => this.handleKeyDown(e) }/><br></br>
=======
            <input type="password" name="password"/><br></br>
>>>>>>> development
            <button id="loginbutton" onClick={this.login}>Log In</button>
          </div>
        </center>
      );
    }
  }
}

function mapStateToProps(state) {
  const {user, username} = state;
  return {user: user,
          username: username}
}

export default connect(mapStateToProps)(Home);