import React, { Component } from "react";
import axios from 'axios'
import styles from '../../App.css';
import SubmissionService from '../../service/submission.service';
import { connect } from 'react-redux';

class Teacher extends Component {
  constructor(props){
    super(props);
    this.URI = 'http://localhost:5000';
    this.user_ref = React.createRef();
    this.getSubmissions = this.getSubmissions.bind(this);

  };
  submissionService = new SubmissionService();


  componentDidMount() {
  }
  
  grade = (event) => {
    var teacherName = event.target.nextSibling.wholeText
    console.log(teacherName)
    console.log(document.getElementById("letterGrade").value)
    this.submissionService.grade(teacherName, event.target.nextSibling.nextSibling.value).then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'grade'})
    })
  };



  getSubmissions() {
    console.log(this.props.user.username)
    this.submissionService.getSubmissions(this.props.user.username).then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'getSubmissions', submission_array: res.data})
    })
  }


  render() {
    console.log(this.props)
    if (this.props.user) {

      return(

        <center>
          <p onClick={this.getSubmissions}>Grade Homework</p>
          { this.props.submission_array.map(user => 
          <><button onClick={this.grade}>Grade</button>{user._id}<input id="letterGrade"></input>{user.student} {user.content} <br></br></> 
         
          
          )}
            
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
  const {user, submission_array} = state;
  return {user: user, submission_array: submission_array}
}

export default connect(mapStateToProps)(Teacher);