import React, { Component } from "react";
import axios from 'axios'
import styles from '../../App.css';
import AdminService from '../../service/admin.service';
import StudentService from '../../service/student.service';
import TeacherService from '../../service/teacher.service';
import UserService from '../../service/user.service';
import { connect } from 'react-redux';
//import Form from "../../components/Form";



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
  form = {
    display: "none"
  }
  studentForm = {
    display: 'none'
  }



  showButtons() {
    document.getElementById("adminButton").style.display = "block";
    document.getElementById("studentButton").style.display = "block";
    document.getElementById("teacherButton").style.display = "block";

  }

  showAdmin() {
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
    this.adminService.getUsers().then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'getUsers', user_array: res.data})
    })
  }

  getStudents() {
    console.log(this.studentService)
    this.studentService.getStudents().then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'getStudents', student_array: res.data})
    })
  }

  getTeachers = (event) => {
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

             <h1>Admin</h1>
             <h1> {this.props.user.fullname} </h1>
             <button id="adduserbtn" onClick={this.showButtons}>Add User </button>
             <button id="deleteuser" onClick={this.getUsers}>Get Users </button>
             <button onClick={this.getStudents}>Assign Student To Teacher</button>
           </div>
          <div id="users">
              <p style={this.props.bold}>Users</p>
                { this.props.user_array.map(user =>
                <>{user.fullname}<button onClick={this.remove}>Delete</button><br/></>)}
              <p id="user" style={this.props.bold}></p>
          </div>
          <div id="students">
              <p  style={this.props.bold}>Students</p>
                { this.props.student_array.map(user =>
                <>{user.username}<button onClick={this.getTeachers}>Get Teacher</button><br/></>)}
              <p id="student" style={this.props.bold}></p>
          </div>
          <div id="teachers">
              <p style={this.props.bold}>Teachers</p>
                { this.props.teacher_array.map(user =>
                <>{user.username}<button onClick={this.assign}>Assign</button></>)}
              <p id="teacher" style={this.props.bold}></p>
          </div>
          <div id="buttonRow">
          <button id="adminButton" onClick={this.showAdmin} style={this.style}>Admin</button>
          <button id="studentButton" onClick={this.showStudent} style={this.style}>Student</button>
          <button id="teacherButton" onClick={this.showTeacher} style={this.style}>Teacher</button>
          </div>
          <div id="form" style={this.form}>
            <p>Username</p>
            <input id="usernameValue"></input>
            <p>Full Name</p>
            <input id="fullnameValue"></input>
            <p>Address</p>
            <input id="addressValue"></input>
          </div>
          <div id="studentForm" style={this.studentForm}>
            <p>Age</p>
            <input id="ageValue"></input>
            <p>Grade</p>
            <input id="gradeValue"></input>
          </div>
          <button id="newAdmin" onClick={this.newAdmin} style={this.style}>Create Admin</button>
          <button id="newStudent" onClick={this.newStudent} style={this.style}>Create Student</button>
          <button id="newTeacher" onClick={this.newTeacher} style={this.style}>Create Teacher</button>
          {/*<div id="adminForm" style={this.adminForm}>
            <p>Username</p>
            <input id="usernameValue"></input>
            <p>Password</p>
            <input id="passwordValue"></input>
            <p>Full Name</p>
            <input id="fullnameValue"></input>
            <p>Address</p>
            <input id="addressValue"></input>
            <button onClick={this.newAdmin}>Create Admin</button>
                </div>*/}
          
          {/* <div id="students" style={this.state.studentStyle}>
           <p  style={this.state.bold}>Students</p>
           { this.state.students.map( student => <p onClick={this.student}>{student.username}</p>) }
           <p id="student" style={this.state.bold}></p>
         </div>
         <div id="teachers" style={this.state.teacherStyle}>
         <p  style={this.state.bold}>Teachers</p>
           { this.state.teachers.map( teacher => <p onClick={this.teacher}>{teacher.username}</p>) }
           <p id="teacher" style={this.state.bold}></p>  */}


        </center>
          //  <button onClick={this.assign} style={this.state.assign}>Assign</button>

      );
    } else {
      //No user is logged in
      return (
        <h1>You are not an Admin</h1>
      )
    }
}
}
  //   this.state = {area: null};
  //   this.state = {username: 'test'};
  //   this.state = {password: ''};
  //   this.state = {fullname: ''};
  //   this.state = {address: ''};
  //   this.state = {role: ''};
  //   this.state = {adduser: ''};
  //   this.state = {
  //     students: [],
  //     teachers: [],
  //     teacherStyle: {
  //       display: "none",
  //       marginBottom: "100px",
  //       marginTop: "100px"
  //     },
  //     bold: {
  //       fontWeight: '700'
  //     },
  //     studentStyle: {
  //       display: "none"
  //     },
  //     assign: {
  //       display: 'none'
  //     }
  //   };
  // }



  // componentDidMount() {
  //   this.getStudents();
  //   this.getTeachers();
  // }

  // handleChange = (e) => {
  //   this.setState({
  //       [e.target.name]: e.target.value
  //   })
  // }

  // toAdminMain = () => {
  //   this.setState({ area: null});
  // }

  // to_add_user = () => {
  //   console.log('in add user')
  //   this.setState({ area: 'adduser'});
  // }

  // to_main = () => {
  //   window.location = "/"
  // }

  // getStudents = () => {
  //   axios.get(this.URI + "/students")
  //   .then(res => this.setState({ students: res.data}))
  //   .catch(err => console.log(err));
  //   console.log(this.state.students);
  // };

  // getTeachers = () => {
  //   axios.get(this.URI + "/teachers")
  //   .then(res => this.setState({ teachers: res.data}))
  //   .catch(err => console.log(err));
  // };

  // listStudents = () => {
  //   this.setState({
  //     studentStyle: {
  //     display: "block"
  //   }
  // })
  // };

  // assign = () => {
  //   axios.put(this.URI + "/students/" + document.getElementById("student").innerHTML, {
  //     teacher: document.getElementById("teacher").innerHTML
  //   })
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err));
  // };

  // student = (event) => {
  //   document.getElementById("student").innerHTML = event.target.innerText;
  //   this.setState({
  //     teacherStyle: {
  //     display: "block"
  //   }
  // })

  // }

  // teacher = (event) => {
  //   document.getElementById("teacher").innerHTML = event.target.innerText;
  //   this.setState({
  //     assign: {
  //     display: "block"
  //   }
  // })
  // }

  // add_user = () => {
  //   const user = {
  //     "username": this.state.username,
  //     "password": this.state.password,
  //     "fullname": this.state.fullname,
  //     "address": this.state.address,
  //     "role": this.state.role
  //   }

  //   axios.put(this.URI + '/users', user)
  //   .then(res => {
  //         console.log(res.data.role);
  //         this.setState({ user: res.data.username});
  //         if (res.data){
  //           this.setState({ adduser: "Added User successfully!"});
  //         }
  //         else{
  //           this.setState({ adduser: "Something went wrong."});
  //         }
  //     });
  // }


//   render() {
//     if (this.state.area === 'adduser'){
//       return(
//         <center>
//           <div id="title"><h1>School System - Admin</h1></div>
//           <div id="content">
//             <table align="center">
//               <tr>
//                 <td>Username:</td>
//                 <td><input type='text' name="username" value={this.state.username} onChange={e => this.handleChange(e)}/></td>
//               </tr>
//               <tr>
//                 <td>Fullname:</td>
//                 <td><input type='text' name="fullname" value={this.state.fullname} onChange={e => this.handleChange(e)}/></td>
//               </tr>
//               <tr>
//                 <td>Password:</td>
//                 <td> <input type='password' name="password" value={this.state.password} onChange={e => this.handleChange(e)}/></td>
//               </tr>
//               <tr>
//                 <td>Address:</td>
//                 <td><input type='text' name="address"value={this.state.address} onChange={e => this.handleChange(e)}/></td>
//               </tr>
//               <tr>
//                 <td>Role:</td>
//                 <td>
//                   <select name="role"  onChange={e => this.handleChange(e)} value={this.state.role}>
//                     <option value="student">Student</option>
//                     <option value="teacher">Teacher</option>
//                     <option value="admin">Admin</option>
//                   </select>
//                 </td>
//               </tr>
//             </table>
//             <button onClick={this.add_user}>Add the user</button>
//             <button onClick={this.toAdminMain}>Back</button>
//             <button onClick={this.listStudents}>Assign Student To Teacher</button>
//             <br></br><br></br>
//             {this.state.adduser}
//           </div>
//           <div id="students" style={this.state.studentStyle}>
//           <p  style={this.state.bold}>Students</p>
//           { this.state.students.map( student => <p onClick={this.student}>{student.username}</p>) }
//           <p id="student" style={this.state.bold}></p>
//         </div>
//         <div id="teachers" style={this.state.teacherStyle}>
//         <p  style={this.state.bold}>Teachers</p>
//           { this.state.teachers.map( teacher => <p onClick={this.teacher}>{teacher.username}</p>) }
//           <p id="teacher" style={this.state.bold}></p>


//           </div>
//           <button onClick={this.assign} style={this.state.assign}>Assign</button>
//         </center>
//       )
//     }
//     else{
//       return (
//         <center>
//           <div id="title"><h1>School System - Admin</h1></div>
//           <div id="content">
//             <h1>Admin</h1>

//             <button id="adduserbtn" onClick={this.to_add_user}>Add User </button>
//             <button id="to_main" onClick={this.to_main}>Log out </button>
//             <button onClick={this.listStudents}>Assign Student To Teacher</button>
//           </div>
//           <div id="students" style={this.state.studentStyle}>
//           <p  style={this.state.bold}>Students</p>
//           { this.state.students.map( student => <p onClick={this.student}>{student.username}</p>) }
//           <p id="student" style={this.state.bold}></p>
//         </div>
//         <div id="teachers" style={this.state.teacherStyle}>
//         <p  style={this.state.bold}>Teachers</p>
//           { this.state.teachers.map( teacher => <p onClick={this.teacher}>{teacher.username}</p>) }
//           <p id="teacher" style={this.state.bold}></p>


//           </div>
//           <button onClick={this.assign} style={this.state.assign}>Assign</button>
//         </center>
//       );
//     }

//   }
//  }

function mapStateToProps(state) {
  const {user, user_array, student_array, teacher_array} = state;
  return {user: user, user_array: user_array, student_array: student_array, teacher_array: teacher_array}
}

export default connect(mapStateToProps)(Admin);