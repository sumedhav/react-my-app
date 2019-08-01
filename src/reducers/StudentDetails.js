const studentDetails=(previousState={}, action)=>{
    switch(action.type) {
        case "STUDENTDETAILS":
            return {
                ...previousState,
                studentDetails: action.data
            };
        default: return  previousState;
    }
}
export default studentDetails;