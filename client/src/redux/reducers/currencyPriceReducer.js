import { initState } from "../initState"
import { GET_PRICE_CURRENCY, GET_PRICE_CURRENCY2 } from "../types/price.types"



export const currencyPriceReducer = (state=initState, action) => {
  switch (action.type) {
    case GET_PRICE_CURRENCY:
      return action.payload
      
      
  
    default: return state
  }
}


export const currencyPriceReducer2 = (state=initState, action) => {
  switch (action.type) {
    case GET_PRICE_CURRENCY2:
      return action.payload
      
      
  
    default: return state
  }
}
