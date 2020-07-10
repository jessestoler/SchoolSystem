import React, { Component } from "react";
import { connect } from 'react-redux';
import StudentService from '../../service/student.service'


class Student extends Component {
  /* constructor(props){
    super(props);
  } */

  studentService = new StudentService();

  showGrades = () => {
    console.log('Show Grades')
    console.log(this.props.user.grades)
    //If the student does not have any grades, display a message
    if (!this.props.user.grades || this.props.user.grades === []) {
      this.props.dispatch( { type: 'showGrades', grades: [{'class': 'There are no grades', 'grade': ''}]})
    }
    //Else show their grades
    else {
      this.props.dispatch({ type: 'showGrades', grades: this.props.user.grades})
    }
    document.getElementById('hideGrades').hidden = false
    document.getElementById('showGrades').hidden = true
  };

  hideGrades = () => {
    this.props.dispatch({ type: 'showGrades', grades: []})
    document.getElementById('showGrades').hidden = false
    document.getElementById('hideGrades').hidden = true
  }

  updateForm =  () => {
    let name = this.props.user.username
    let password = this.props.user.password
    let address = this.props.user.address
    document.getElementById('usernameLabel').hidden = false
    document.getElementById('username').hidden = false
    document.getElementById('username').value = name
    document.getElementById('passwordLabel').hidden = false
    document.getElementById('password').hidden = false
    document.getElementById('password').value = password
    document.getElementById('addressLabel').hidden = false
    document.getElementById('address').hidden = false
    document.getElementById('address').value = address
    document.getElementById('submitEdit').hidden = false
    document.getElementById('hideEdit').hidden = false
    document.getElementById('showEdit').hidden = true
  }

  hideUpdateForm = () => {
    document.getElementById('usernameLabel').hidden = true
    document.getElementById('username').hidden = true
    document.getElementById('passwordLabel').hidden = true
    document.getElementById('password').hidden = true
    document.getElementById('addressLabel').hidden = true
    document.getElementById('address').hidden = true
    document.getElementById('submitEdit').hidden = true
    document.getElementById('showEdit').hidden = false
    document.getElementById('hideEdit').hidden = true
  }

  updateProfile = () => {

    let newUsername = document.getElementById('username').value
    let newPassword = document.getElementById('password').value
    let newAddress = document.getElementById('address').value
    let updateForm = {'username': newUsername, 'password': newPassword, 'address': newAddress}
    this.studentService.updateProfile(this.props.user.username, updateForm).then(res => {

      console.log(res.data);
      //this.props.dispatch( { type: 'login', username: res.data.username, user: res.data})
  });
  }

  render() {
    console.log(this.props)
    if (this.props.user) {
      //A Student is logged in and display their grades or edit profile with buttons
      return (
        <>
          <h1> {this.props.user.fullname} </h1>
          <p><h2>Grades</h2></p>
          <div>
              {this.props.grades.map(grade => 
                <p key={grade.class}>{grade.class} : {grade.grade}</p>
              )}
          </div>
          <p><button id="showGrades" onClick={this.showGrades}>Grades</button>
              <button hidden='true' id="hideGrades" onClick={this.hideGrades}>Hide</button></p>
          <h2>Edit Profile</h2>
          <div>
                <p hidden='true' id='usernameLabel'>Username</p>
                <input hidden='true' type='text' id='username'></input>
                <p hidden='true' id='passwordLabel'>Password</p>
                <input hidden='true' type='text' id='password'></input>
                <p hidden='true' id='addressLabel'>Address</p>
                <input hidden='true' type='text' id='address'></input>
                <p><button hidden='true' id='submitEdit' onClick={this.updateProfile}>Submit</button></p>
          </div>
          <p><button id="showEdit" onClick={this.updateForm}>Edit</button>
              <button hidden='true' id="hideEdit" onClick={this.hideUpdateForm}>Hide</button></p>
          <h2>Other Options</h2>
        </>
      );
    }
    else {
      //No user is logged in
      return (
        <h1>You are not a Student</h1>
      )
    }
  }
}

function mapStateToProps(state) {
  const {user, grades} = state;
  return {user: user, grades: grades}
}

export default connect(mapStateToProps)(Student);