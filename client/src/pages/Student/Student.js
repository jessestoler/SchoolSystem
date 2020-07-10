import React, { Component } from "react";
import { connect } from 'react-redux';


class Student extends Component {
  /* constructor(props){
    super(props);
  } */

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
  };

  removeGrades = () => {
    this.props.dispatch({ type: 'showGrades', grades: []})
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