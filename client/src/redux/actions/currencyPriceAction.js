import { GET_PRICE_CURRENCY, GET_PRICE_CURRENCY2} from "../types/price.types";

export const getCurrencyPrice = (getPriceCountry) => ({
    type: GET_PRICE_CURRENCY,
    payload: getPriceCountry
})

export const getCurrencyPrice2 = (getPriceCountry2) => ({
  type: GET_PRICE_CURRENCY2,
  payload: getPriceCountry2


})
