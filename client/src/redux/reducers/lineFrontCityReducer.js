import { initState } from "../initState";
import { GET_FRONT_CITY } from "../types/lineFrontCity.types";


export const lineFrontCityReducer = (state=initState, action) => {
  switch (action.type) {
    case GET_FRONT_CITY:
      return action.payload
      
    
  
    default: return state
     
  }
}
