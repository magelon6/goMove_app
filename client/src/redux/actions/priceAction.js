import {GET_PRICE, GET_PRICE2} from "../types/price.types";

export const getPrice = (getPriceCountry) => ({
    type: GET_PRICE,
    payload: getPriceCountry
})

export const getPrice2 = (getPriceCountry2) => ({
  type: GET_PRICE2,
  payload: getPriceCountry2


})
