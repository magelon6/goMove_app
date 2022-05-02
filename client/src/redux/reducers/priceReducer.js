import { initState } from "../initState"
import { GET_PRICE, GET_PRICE2 } from "../types/price.types"



export const priceReducer = (state=initState, action) => {
  switch (action.type) {
    case GET_PRICE:
      return action.payload
      
      
  
    default: return state
  }
}


export const priceReducer2 = (state=initState, action) => {
  switch (action.type) {
    case GET_PRICE2:
      return action.payload
      
      
  
    default: return state
  }
}
