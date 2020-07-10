import React, { Component } from "react";
import styles from '../../App.css';
import AddAssignment from './AddAssignment.component.js';
import { connect } from 'react-redux';

class Teacher extends Component {
  constructor(props){
    super(props);
    this.props.dispatch({type: 'toggleAssignHW', isAssigning: false})
    this.to_assign = this.to_assign.bind(this);
  }

  componentDidMount() {    
  }

  to_assign = () => {
    this.props.dispatch({type: 'toggleAssignHW', isAssigning: true})
  }

  render() {
    return (
      <center>
        <div id="title"><h1>School System - Teacher</h1></div>
        <div id="content">
          <div id="container">
            <h1>Teacher</h1>
            <button id="to_assign" onClick={this.to_assign}>Add Assignment </button>
            
            <AddAssignment/>
          </div>
        </div>
      </center>
    );
  }
}

function mapStateToProps(state) {
  const {isAssigning} = state;
  return {isAssigning: isAssigning}
}

export default connect(mapStateToProps) (Teacher);
