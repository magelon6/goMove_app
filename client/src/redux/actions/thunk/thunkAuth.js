import AuthService from "../../../services/AuthService";
import {getUser} from "../userActions";

export const THUNK_ACTION_LOGIN = (userData) => async (dispatch) => {
    try {
        const response = await AuthService.login(userData);
        console.log(response.data.userFront, 'lmapooooooo')
        dispatch(getUser(response.data.userFront));
    } catch (error) {
        console.log(error);
    }
};

