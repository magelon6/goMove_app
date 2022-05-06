import {initState} from "../initState";
import {GET_USER, UNSET_USER} from "../types/User.types";


export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USER:
            console.log(action.payload, 'reducer');
            return action.payload
        case UNSET_USER:
            return null
        default:
            return state;
    }
}
