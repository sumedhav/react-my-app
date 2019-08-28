const studentDetails=(previousState={}, action)=>{
    switch(action.type) {
        case "STUDENTDETAILS":
            return {
                ...previousState,
                studentDetails: action.data
            };
        case "STUDENT_DETAILS_LIST":
            return {
                ...previousState,
                studentDetailsList: action.data
            }
        default: return  previousState;
    }
}
export default studentDetails;