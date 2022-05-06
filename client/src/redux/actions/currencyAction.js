import { CHANGE_CURRENCY, GET_CURRENCY } from "../types/currency.types";



export const getCurrency = (currencyFrom) => ({
  type: GET_CURRENCY,
  payload : currencyFrom
})


export const changeCurrency = (data) => ({
  type: CHANGE_CURRENCY,
  payload: data
})
