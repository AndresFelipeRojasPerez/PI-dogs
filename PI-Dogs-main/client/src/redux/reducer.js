import { CREATE_DOG, GET_DOGS, GET_DOGS_BY_NAME } from "./actions";


const initialState = {
    dogs : [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return {...state, dogs: action.payload};

        case GET_DOGS_BY_NAME:
            console.log(action.payload);
            return {...state, dogs: action.payload};

        case CREATE_DOG:
            alert (action.payload);

    default:
        return {...state};
    }
}

export default rootReducer;