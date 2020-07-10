import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios'
import AssignmentService from '../../service/assignment.service';
import SubmissionService from '../../service/submission.service';


class Student extends Component {
  constructor(props){
    super(props);
    this.URI = 'http://localhost:5000';
    this.getAssignments = this.getAssignments.bind(this);
    this.assignment = '';
  };

  assignmentService = new AssignmentService();
  submissionService = new SubmissionService();

  showGrades = () => {
    console.log('Show Grades')
    this.props.dispatch({ type: 'showGrades', grades: this.props.user.grades})
  };

  removeGrades = () => {
    this.props.dispatch({ type: 'showGrades', grades: []})
  }

  select = (event) => {
    this.assignment = event.target.previousSibling.wholeText;
    document.getElementById("thisAssignment").innerHTML = this.assignment;
  }

  getAssignments() {
    this.assignmentService.getAssignments().then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'getAssignments', assignment_array: res.data})
    })
  }

  submit = () => {
    var username = this.props.user.username;
    var assignment = this.assignment;
    var content = document.getElementById("homework").value 
    this.submissionService.newSubmission(username, assignment, content).then(res => {
      console.log(res.data)
      this.props.dispatch({type: 'newSubmission'})
    })
  }

  render() {
    console.log(this.props)
    if (this.props.user) {
      //A Student is logged in and their grades are being displayed
      return (
        <>
          <h1> {this.props.user.fullname} </h1><br/>
          <h2>Grades</h2>
          <div>
              {this.props.grades.map(grade => 
                <p key={grade.class}>{grade.class} : {grade.grade}</p>
              )}
          </div>
          <p><button id="show" onClick={this.showGrades}>Grades</button>
              <button id="hide" onClick={this.removeGrades}>Remove</button></p>
          <h2>Other Options</h2>
          <button onClick={this.getAssignments}>Submit Homework</button>
          <div id="assignments">
                { this.props.assignment_array.map(assignment =>
                <>{assignment.name}<button onClick={this.select}>Select Assignment</button><br></br></>)}
                <p id="thisAssignment"></p>
                <textarea id="homework"></textarea>
                <button onClick={this.submit}>Submit</button>
          </div>
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
  const {user, grades, assignment_array} = state;
  return {user: user, grades: grades, assignment_array: assignment_array}
}

export default connect(mapStateToProps)(Student);