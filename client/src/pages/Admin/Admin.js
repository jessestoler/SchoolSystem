import React, { Component } from "react";
import axios from 'axios'
import styles from '../../App.css';
import AdminService from '../../service/admin.service';
import StudentService from '../../service/student.service';
import TeacherService from '../../service/teacher.service';
import UserService from '../../service/user.service';
import { connect } from 'react-redux';

class Admin extends Component {
  constructor(props){
    super(props);
    this.URI = 'http://localhost:5000';
    this.user_ref = React.createRef();
    this.getUsers = this.getUsers.bind(this);
    this.getStudents = this.getStudents.bind(this);
    this.getTeachers = this.getTeachers.bind(this);
    this.person = '';
  };
  adminService = new AdminService();
  studentService = new StudentService();
  teacherService = new TeacherService();
  userService = new UserService();

  componentDidMount() {
  }

  style = {
    display: "none"
  }
  adminForm = {
    display: "none"
  }
  form = {
    display: "none"
  }
  studentForm = {
    display: 'none'
  }
  
  hideAll(){
    document.getElementById('users').style.display = 'none';
    document.getElementById('students').style.display = 'none';
    document.getElementById('teachers').style.display = 'none';
    document.getElementById("buttonRow").style.display = "none";
    document.getElementById("adminForm").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("newAdmin").style.display = "none";
    document.getElementById("newStudent").style.display = "none";
    document.getElementById("newTeacher").style.display = "none";
  }

  showButtons() {
    document.getElementById('users').style.display = 'none';
    document.getElementById('students').style.display = 'none';
    document.getElementById('teachers').style.display = 'none';
    document.getElementById("adminForm").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("newAdmin").style.display = "none";
    document.getElementById("newStudent").style.display = "none";
    document.getElementById("newTeacher").style.display = "none";
    document.getElementById("buttonRow").style.display = "block";
  }

  showAdmin() {
    document.getElementById("adminForm").style.display = "block";
    document.getElementById("form").style.display = "block";
    document.getElementById("newAdmin").style.display = "block";
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("newStudent").style.display = "none";
    document.getElementById("newTeacher").style.display = "none";
  }

  showStudent() {
    document.getElementById("form").style.display = "block";
    document.getElementById("studentForm").style.display = "block";
    document.getElementById("newStudent").style.display = "block";
    document.getElementById("newAdmin").style.display = "none";
    document.getElementById("newTeacher").style.display = "none";
  }

  showTeacher() {
    document.getElementById("form").style.display = "block";
    document.getElementById("newTeacher").style.display = "block";
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("newAdmin").style.display = "none";
    document.getElementById("newStudent").style.display = "none";
  }

  user = (event) => {
    document.getElementById("user").innerHTML = event.target.innerText;
  }

  getUsers() {
    console.log(this.adminService)
    this.hideAll()
    document.getElementById('users').style.display = 'block';

    
    this.adminService.getUsers().then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'getUsers', user_array: res.data})
    })
  }

  getStudents() {
    this.hideAll()
    document.getElementById('students').style.display = 'block';
    console.log(this.studentService)
    this.studentService.getStudents().then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'getStudents', student_array: res.data})
    })
  }

  getTeachers = (event) => {
    this.hideAll()
    document.getElementById('teachers').style.display = 'block';
    this.person = event.target.previousSibling.wholeText
    console.log(this.teacherService)
    this.teacherService.getTeachers().then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'getTeachers', teacher_array: res.data})
    })
  }

  newAdmin = () => {
    console.log(document.getElementById("usernameValue").value)
    var username = document.getElementById("usernameValue").value
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var one = letters[Math.floor(Math.random() * letters.length)];
    var two = letters[Math.floor(Math.random() * letters.length)];
    var three = letters[Math.floor(Math.random() * letters.length)];
    var four = letters[Math.floor(Math.random() * letters.length)];
    var five = letters[Math.floor(Math.random() * letters.length)];
    var six = letters[Math.floor(Math.random() * letters.length)];
    var seven = letters[Math.floor(Math.random() * letters.length)];
    var eight = letters[Math.floor(Math.random() * letters.length)];
    var password = one + two + three + four + five + six + seven + eight;
    var fullname = document.getElementById("fullnameValue").value
    var address = document.getElementById("addressValue").value
    this.userService.newAdmin(username, password, fullname, address).then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'newAdmin'})
    })
  };

  newStudent = () => {
    var username = document.getElementById("usernameValue").value;
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var one = letters[Math.floor(Math.random() * letters.length)];
    var two = letters[Math.floor(Math.random() * letters.length)];
    var three = letters[Math.floor(Math.random() * letters.length)];
    var four = letters[Math.floor(Math.random() * letters.length)];
    var five = letters[Math.floor(Math.random() * letters.length)];
    var six = letters[Math.floor(Math.random() * letters.length)];
    var seven = letters[Math.floor(Math.random() * letters.length)];
    var eight = letters[Math.floor(Math.random() * letters.length)];
    var password = one + two + three + four + five + six + seven + eight;
    var fullname = document.getElementById("fullnameValue").value
    var address = document.getElementById("addressValue").value
    var age = document.getElementById("ageValue").value
    var grade = document.getElementById("gradeValue").value
    this.userService.newStudent(username, password, fullname, address, age, grade).then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'newStudent'})
    })
  };

  newTeacher = () => {
    console.log(document.getElementById("usernameValue").value)
    var username = document.getElementById("usernameValue").value
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var one = letters[Math.floor(Math.random() * letters.length)];
    var two = letters[Math.floor(Math.random() * letters.length)];
    var three = letters[Math.floor(Math.random() * letters.length)];
    var four = letters[Math.floor(Math.random() * letters.length)];
    var five = letters[Math.floor(Math.random() * letters.length)];
    var six = letters[Math.floor(Math.random() * letters.length)];
    var seven = letters[Math.floor(Math.random() * letters.length)];
    var eight = letters[Math.floor(Math.random() * letters.length)];
    var password = one + two + three + four + five + six + seven + eight;
    var fullname = document.getElementById("fullnameValue").value
    var address = document.getElementById("addressValue").value
    this.userService.newTeacher(username, password, fullname, address).then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'newTeacher'})
    })

  };

  assign = (event) => {
    var teacherName = event.target.previousSibling.wholeText
    console.log(this.person)
    console.log(teacherName)
    this.studentService.assign(this.person, teacherName).then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'assign'})
    })
  };

  remove = (event) => {
    var name = event.target.previousSibling.wholeText
    console.log(name)
    this.adminService.remove(name).then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'remove'})
    })
  };

  render() {
    console.log(this.props)
    if (this.props.user) {

      return(

        <center>
           <div id="title"><h1>School System - Admin</h1></div>
           <div id="content">
            <div id="container">
              <h1>Admin</h1>
              Welcome back, {this.props.user.fullname} <br/>
              <button id="adduserbtn" onClick={this.showButtons}>Add User </button>
              <button id="deleteuser" onClick={this.getUsers}>Get Users </button>
              <button onClick={this.getStudents}>Assign Student To Teacher</button>
              
              <div id="users" style={{display: 'none'}}>
                  <p style={this.props.bold}>Users</p>
                    { this.props.user_array.map(user =>
                    <>{user.fullname}<button onClick={this.remove}>Delete</button><br/></>)}
                  <p id="user" style={this.props.bold}></p>
              </div>
              <div id="students" style={{display: 'none'}}>
                  <p  style={this.props.bold}>Students</p>
                    { this.props.student_array.map(user =>
                    <>{user.username}<button onClick={this.getTeachers}>Get Teacher</button><br/></>)}
                  <p id="student" style={this.props.bold}></p>
              </div>
              <div id="teachers" style={{display: 'none'}}>
                  <p style={this.props.bold}>Teachers</p>
                    { this.props.teacher_array.map(user =>
                    <>{user.username}<button onClick={this.assign}>Assign</button></>)}
                  <p id="teacher" style={this.props.bold}></p>
              </div>
              <div id="buttonRow" style={this.style}><br/>
                  What sort of user? <br/><br/>
                  <button id="adminButton" onClick={this.showAdmin}>Admin</button>
                  <button id="studentButton" onClick={this.showStudent}>Student</button>
                  <button id="teacherButton" onClick={this.showTeacher}>Teacher</button>
              </div>
              <div id="adminForm" style={this.adminForm}>
                <button id="studentButton" onClick={this.showStudent} style={this.style}>Student</button>
                <button id="teacherButton" onClick={this.showTeacher} style={this.style}>Teacher</button>
              </div>
              <div id="form" style={this.form}>
                Username<br/>
                <input id="usernameValue"></input><br/>
                Full Name<br/>
                <input id="fullnameValue"></input><br/>
                Address<br/>
                <input id="addressValue"></input><br/>
              </div>
              <div id="studentForm" style={this.studentForm}>
                Age<br/>
                <input id="ageValue"></input><br/>
                Grade<br/>
                <input id="gradeValue"></input><br/>
              </div>
              <center><br/>
                <button id="newAdmin" onClick={this.newAdmin}  style={{display: 'none'}}>Create Admin</button>
                <button id="newStudent" onClick={this.newStudent} style={{display: 'none'}}> Create Student</button>
                <button id="newTeacher" onClick={this.newTeacher} style={{display:'none'}}>Create Teacher</button>
              </center>
              </div>
          </div>
        </center>

      );
    } else {
      //No user is logged in
      return (
        <h1>You are not an Admin</h1>
      )
    }
  }
}

function mapStateToProps(state) {
  const {user, user_array, student_array, teacher_array} = state;
  return {user: user, user_array: user_array, student_array: student_array, teacher_array: teacher_array}
}

export default connect(mapStateToProps)(Admin);