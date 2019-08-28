import React, {Component} from 'react';
import './StudentDetails.css'
import {connect} from "react-redux";
import {fetchStudentDetailsFromApi} from "../../actions/studentDetailsFromApi";

class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };
    }

    componentDidMount() {
        if(!this.props.studentList ){
            this.props.history.push('/students');
        }else{
            this.props.fetchStudentDetailsFromApi(this.props.match.params.rollNumber);
        }

        // console.log(this.props.match.params.rollNumber);
    };

    render() {
        return (
            <React.Fragment>
                { this.props.studentDetails &&
                <div className="student-details">
                    {this.props.studentDetails.name} {this.props.studentDetails.class}-{this.props.studentDetails.section}
                </div>
                }
            </React.Fragment>
        )
    }
}



const mapStateToProps = (store)  => {
    return {
        studentDetails: store.StudentDetails.studentDetails,
        studentList:  store.StudentList.studentList,
    }
}

const mapDispatchToProps={
    fetchStudentDetailsFromApi
}

const connectMethod= connect(mapStateToProps, mapDispatchToProps);

export default connectMethod(StudentDetails);

