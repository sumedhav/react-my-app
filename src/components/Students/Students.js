import React, {Component} from 'react';
import './Students.css'
import {connect} from "react-redux";
import {getStudentList} from "../../actions/studentListAction";
import {fetchStudentDetails} from "../../actions/studentDetailsAction";
import {Link} from "react-router-dom";
import {Radio} from "../Radio/RadioButton";
import {fetchStudentDetailsList} from "../../actions/studentDetailsList";
import Accordion from "../Accordian/Accordion";


class Students extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            students: [],
            details: {},
            filterText: '',
            checkedItems: new Map()
        };
    }

    componentDidMount() {
        this.props.getStudentList();
    };

    handleClick(student) {
        this.props.fetchStudentDetails(student);
        this.props.history.push('/studentDetails')
        // TODO - use link tags instead of href
    }

    handleButtonClick() {
        console.log("Hello");
        this.props.fetchStudentDetailsList(this.state.students, "0022")
    }

    handleOnChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({checkedItems: prevState.checkedItems.set(item, isChecked)}));
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <Accordion header='Students' isOpen={false}>
                    <button type="button" onClick={this.handleButtonClick}>Click Me!</button>
                    {<Radio options={['Yes', 'No']} name='filterStudents'/>}
                    {this.props.studentList && this.props.studentList.length !== 0 &&
                    <div className="students">
                        {this.props.studentList.map((student, index) =>
                            <div key={`asdas${index}`}>
                                <input key={student.rollNumber} type='checkbox' name={`checkbox_${index}`}
                                       onChange={this.handleOnChange}/>
                                <Link key={index} to={"/students/" + student.rollNumber}
                                      className="student-name">{student.name}</Link>
                            </div>
                        )}
                    </div>
                    }
                </Accordion>

            </React.Fragment>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        studentList: store.StudentList && store.StudentList.studentList,
        abc: store.StudentList.abc
    }
}

const mapDispatchToProps = {
    getStudentList, fetchStudentDetails, fetchStudentDetailsList
}

const connectMethod = connect(mapStateToProps, mapDispatchToProps);

export default connectMethod(Students);
