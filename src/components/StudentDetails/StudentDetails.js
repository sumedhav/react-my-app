import React, {Component} from 'react';
import './StudentDetails.css'
import {connect} from "react-redux";

export const StudentDetails = (props) =>{
    return (
        <React.Fragment>
        { props.studentDetails &&
            <div className="student-details">
                {props.studentDetails.name} {props.studentDetails.class}-{props.studentDetails.section}
            </div>
        }
        </React.Fragment>
    )
}

const mapStateToProps = (store)  => {
    return {
        studentDetails: store.StudentDetails.studentDetails
    }
}

const connectMethod= connect(mapStateToProps, {});

export default connectMethod(StudentDetails);

