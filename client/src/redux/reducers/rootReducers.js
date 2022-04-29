import {combineReducers} from 'redux'
import {cityReducer} from './cityReducer'
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    city: cityReducer,
    user: userReducer,
})
