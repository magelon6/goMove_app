import {GET_USER} from "../types/User.types";

export const getUser = (user) => {
    console.log(user, 'aactions');
    return {
        type: GET_USER,
        payload: user
    }
};
