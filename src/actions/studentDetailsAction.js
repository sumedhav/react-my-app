export const fetchStudentDetails = (details) => async dispatch =>{
    dispatch({
        type: "STUDENTDETAILS",
        data: details
    })
}

