import axios from "axios";

export const fetchStudentDetailsFromApi = (id) => async dispatch =>{
    const response = await axios(
        `http://localhost:10000/students/${id}`
    );
    dispatch({
        type: "STUDENTDETAILS",
        data: response.data
    })
}

