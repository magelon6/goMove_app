import {initState} from "../initState";
import { GET_CITY } from "../types/City.types";

export const cityReducer = (state=initState, action) => {
  switch (action.type) {
    case GET_CITY:
      return action.payload
      
      
  
    default: return state
  }
}
