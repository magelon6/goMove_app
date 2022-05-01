import {combineReducers} from 'redux'
import { cityReducer } from './cityReducer'
import { priceReducer } from './priceReducer'


export const rootReducer = combineReducers({
  city: cityReducer,
  price: priceReducer,
})
