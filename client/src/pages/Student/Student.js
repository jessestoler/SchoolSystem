import React, { Component } from "react";
import { connect } from 'react-redux';


class Student extends Component {
  /* constructor(props){
    super(props);
  } */

  render() {
    console.log(this.props)
    if (this.props.user) {
      //A Student is logged in and their grades are being displayed
      return (
        <>
          <h1> {this.props.user.fullname} </h1>
          <div>
              {this.props.user.grades.map(grade => 
                <p key={grade.class}>{grade.class} : {grade.grade}</p>
              )}
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
  const {user} = state;
  return {user: user}
}

export default connect(mapStateToProps)(Student);