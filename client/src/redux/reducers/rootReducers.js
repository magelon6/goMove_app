import {combineReducers} from 'redux'
import { cityReducer } from './cityReducer'
import { priceReducer } from './priceReducer'
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
  city: cityReducer,
  price: priceReducer,
  user: userReducer,
})
