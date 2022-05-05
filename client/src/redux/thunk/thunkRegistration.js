import AuthService from "../../services/AuthService";
import {getUser} from "../actions/userActions";

export const THUNK_ACTION_REGISTER = (userData) => async (dispatch) => {
    try {
        const response = await AuthService.registration(userData);
        console.log('THUNK', response);
        dispatch(getUser(response.data.user));
    } catch (error) {
        console.log(error);
    }
};

