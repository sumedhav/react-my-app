export const fetchStudentDetailsList = (students, rollNumber) => async dispatch =>{
    const studentDetailsList = []
    students.map((student) =>
        {   if(student.rollNumber == rollNumber)
                studentDetailsList.push(student);
        }
    )
    dispatch({
        type: "STUDENT_DETAILS_LIST",
        data: studentDetailsList
    })
}

