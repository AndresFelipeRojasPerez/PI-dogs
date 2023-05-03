import axios from 'axios';

export const GET_DOGS = "GET_DOGS";
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME";
export const CREATE_DOG = "CREATE_DOG";


export const getDogs = () => {
    return async function (dispatch) {
        const apiData = await axios.get(
            "http://localhost:3001/dogs/"
        ); 
        const dogs = apiData.data;
        dispatch({ type: GET_DOGS, payload: dogs });
    };
}; 

export const getDogsByName = (name) => {
    return async function (dispatch) {

        try {
            const dogFound = await axios.get(`http://localhost:3001/dogs?name=${name}`);
            return dispatch({ type: GET_DOGS_BY_NAME, payload: dogFound.data })
        } catch (error) {
            alert(error.response.data);
        }
    };
}; 


export const createDog = (dog) => {
    return async function (dispatch) {

        try {
            const dogCreated = await axios.post(`http://localhost:3001/dogs`, dog);
            return dispatch({ type: CREATE_DOG, payload: dogCreated.data });
            
        } catch (error) {
            alert(error.response.data);
        }
    };
}; 