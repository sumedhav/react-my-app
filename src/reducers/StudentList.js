const studentList=(previousState={}, action)=>{
    switch(action.type) {
        case "STUDENTLIST":
            return {
                ...previousState,
                studentList: action.data
            };
        default: return  previousState;
    }

}
export default studentList;