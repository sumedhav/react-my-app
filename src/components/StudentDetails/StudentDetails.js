import React from "react";
import './StudentDetails.css'

export const StudentDetails=(props)=>{
    return (
        <div className="student-details">{props.name} {props.studentClass}-{props.section}</div>
    )
}

