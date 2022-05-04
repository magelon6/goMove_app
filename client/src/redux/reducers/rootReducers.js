import {combineReducers} from 'redux'
import { cityReducer } from './cityReducer'
import { priceReducer, priceReducer2 } from './priceReducer'
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
  city: cityReducer,
  price: priceReducer,
  price2: priceReducer2,
  user: userReducer,
})
