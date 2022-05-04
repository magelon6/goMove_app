import {initState} from "../initState";
import { SET_USER } from "../types/Profile.types";
import {GET_USER} from "../types/User.types";

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USER:
            console.log(action.payload, 'reducer');
            return action.payload
        case SET_USER:
            return action.payload;
        default:
            return state
    }
}
