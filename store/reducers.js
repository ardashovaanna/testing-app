import {PUT_USERNAME_DATA} from "./actions";

const initialState = {
    username:"",
    group:"",
    connectData:"",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_USERNAME_DATA:
            return {
                ...state,
                username: action.payload
            }

    }
    return state;
}