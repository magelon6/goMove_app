import {GET_USER} from "../types/User.types";

export const getUser = (user) => {
    return {
        type: GET_USER,
        payload: user
    }
};
