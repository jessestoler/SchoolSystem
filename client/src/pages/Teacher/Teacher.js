import React, { Component } from "react";
import { connect } from 'react-redux';
import styles from '../../App.css';
import TeacherService from '../../service/teacher.service';
import UserService from '../../service/user.service';

class Teacher extends Component {
  constructor(props){
    super(props);
    this.URI = 'http://localhost:5000';
    this.user_ref = React.createRef();
    };
  teacherService = new TeacherService();
  userService = new UserService();

  componentDidMount() {
  }
  editForm = {
    display: 'none'
  }


  editProfile = () => {
    let userName = this.props.user.username;
    let password = this.props.user.password;
    let address = this.props.user.address;

    document.getElementById("usernameTitle").hidden = false;
    document.getElementById("username").hidden = false;
    document.getElementById("username").value = userName;
    document.getElementById("passwordTitle").hidden = false;
    document.getElementById("password").hidden = false;
    document.getElementById("password").value = password;
    document.getElementById("addressTitle").hidden = false;
    document.getElementById("address").hidden = false;
    document.getElementById("address").value = address;
    document.getElementById("submit").hidden = false;
    document.getElementById("hide").hidden = false;
    document.getElementById("show").hidden = true;
  }


  hideProfileForm = () => {
    document.getElementById("usernameTitle").hidden = true;
    document.getElementById("username").hidden = true;
    document.getElementById("passwordTitle").hidden = true;
    document.getElementById("password").hidden = true;
    document.getElementById("addressTitle").hidden = true;
    document.getElementById("address").hidden = true;
    document.getElementById("submit").hidden = true;
    document.getElementById("hide").hidden = true;
    document.getElementById("show").hidden = false;

  }

  updateTeacher = () => {
    let newUsername = document.getElementById('username').value
    let newPassword = document.getElementById('password').value
    let newAddress = document.getElementById('address').value
    let updateProfileForm = {'username': newUsername, 'password': newPassword, 'address': newAddress}
    this.teacherService.updateTeacherProfile(this.props.user.username, updateProfileForm).then(res=> {
      console.log(res.data);
      window.alert('Profile Updated')
    });
  }


  render() {
    console.log(this.props.user)
    if (this.props.user) {
      return (
        <center>
          <div>
            <h2>Teacher</h2>
            <p>{this.props.user.fullname}</p>
              {/* <button id="editButton" onClick={this.editProfile} style={this.style}>Edit Profile</button> */}
          </div>

          <div>
                <p hidden='true' id='usernameTitle'>Username</p>
                <input hidden='true' type='text' id='username'></input>
                <p hidden='true' id='passwordTitle'>Password</p>
                <input hidden='true' type='text' id='password'></input>
                <p hidden='true' id='addressTitle'>Address</p>
                <input hidden='true' type='text' id='address'></input>
                <p><button hidden='true' id='submit' onClick={() => {this.updateTeacher();
                                                                    this.hideProfileForm();}} >Submit</button></p>

                <p><button id="show" onClick={this.editProfile}>Show</button>
                  <button hidden='true' id="hide" onClick={this.hideProfileForm}>Hide</button>
                  </p>
          </div>
        </center>
      );
    } else {
      return (
        <h1>Cannot find you as a teacher</h1>
      )
    }
  }

}

function mapStateToProps(state){
  const { user } = state;
  return { user: user }
}

export default connect(mapStateToProps)(Teacher);