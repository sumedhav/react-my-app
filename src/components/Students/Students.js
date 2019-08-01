import React, {Component} from 'react';
import './Students.css'
import {connect} from "react-redux";
import {getStudentList} from "../../actions/studentListAction";
import {fetchStudentDetails} from "../../actions/studentDetailsAction";


class Students extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      students: [],
      details: {
      }
    };
  }

  componentDidMount() {
    this.props.getStudentList();
  };

  handleClick(student) {
    this.props.fetchStudentDetails(student);
    this.props.history.push('/studentDetails')
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        {this.props.studentList && this.props.studentList.length !== 0 &&
        <div className="students">
          {this.props.studentList.map((student, index) =>
              <div key={index} className="student-name" onClick={() => this.handleClick(student)}>
                {student.name}
              </div>)}
        </div>
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (store)  => {
  return {
    studentList: store.StudentList && store.StudentList.studentList,
    abc: store.StudentList.abc
  }
}

const mapDispatchToProps={
  getStudentList, fetchStudentDetails
}

const connectMethod = connect(mapStateToProps, mapDispatchToProps);

export default connectMethod(Students);
