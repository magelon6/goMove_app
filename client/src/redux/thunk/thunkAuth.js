import AuthService from "../../services/AuthService";
import {getUser} from "../actions/userActions";

export const THUNK_ACTION_LOGIN = (userData) => async (dispatch) => {
    try {
        const response = await AuthService.login(userData);
        dispatch(getUser(response.data.userFront));
    } catch (error) {
        console.log(error);
    }
};

