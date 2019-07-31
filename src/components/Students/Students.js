import React, {Component} from 'react';
import axios from 'axios';
import './Students.css'
import {StudentDetails} from  '../StudentDetails/StudentDetails'


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

  async componentDidMount() {
    const response = await axios(
      "https://student-management-api-1u3cd4j7s.now.sh/students"
    );
    this.setState({students: response.data})
  };

  handleClick(student) {
    this.setState({details: student})
  }

  render() {
    return (
      <React.Fragment>
        {this.state.students.length !== 0 &&
        <div className="students">
          {this.state.students.map((student, index) =>
              <div key={index} className="student-name" onClick={() => this.handleClick(student)}>
                {student.name}
              </div>)}
        </div>
        }
        {
          Object.keys(this.state.details).length !== 0 &&
          <StudentDetails name={this.state.details.name}
                          studentClass={this.state.details.class}
                          section={this.state.details.section}/>
        }
      </React.Fragment>
    )
  }
}

export default Students;
