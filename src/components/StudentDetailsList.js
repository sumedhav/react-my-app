import React, {Component} from 'react';
import {connect} from "react-redux";

export const StudentDetailsList = (props) =>{
    return (
        <React.Fragment>
            {
                props.studentDetailsList.map((student, index) =>
                    console.log(student)
                )
            }
        </React.Fragment>
    )
}

const mapStateToProps = (store)  => {
    return {
        studentDetailsList: store.StudentDetails.studentDetailsList
    }
}

const connectMethod= connect(mapStateToProps, {});

export default connectMethod(StudentDetailsList);
