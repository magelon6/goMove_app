import { initState } from "../initState"
import { GET_PRICE } from "../types/price.types"



export const priceReducer = (state=initState, action) => {
  switch (action.type) {
    case GET_PRICE:
      return action.payload
      
      
  
    default: return state
  }
}
