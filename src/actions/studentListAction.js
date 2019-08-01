import axios from "axios";

export const getStudentList = () => async dispatch =>{
    const response = await axios(
        "https://student-management-api-1u3cd4j7s.now.sh/students"
    );
    dispatch({
        type: "STUDENTLIST",
        data: response.data
    })
}

