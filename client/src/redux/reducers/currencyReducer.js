import { initState } from "../initState"
import { CHANGE_CURRENCY, GET_CURRENCY } from "../types/currency.types"


export const currencyReducer = (state=initState, action) => {
  switch (action.type) {
    case GET_CURRENCY:
      return action.payload;
    case CHANGE_CURRENCY:
      return action.payload
  
    default: return state
  }
}
