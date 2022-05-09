
import {getPrice, getPrice2} from "../actions/priceAction";
import axios from 'axios'
import { getCurrencyPrice, getCurrencyPrice2 } from "../actions/currencyPriceAction";

export const getPriceFromDB = ({city, country}) => async (dispatch) => {
    const response = await axios.post("http://localhost:5001/api/price", {city, country})
    dispatch(getPrice(response.data))
    dispatch(getCurrencyPrice(response.data))

}



export const getPriceFromDB2 = ({city, country}) => async (dispatch) => {
  const response = await axios.post("http://localhost:5001/api/price", {city, country})
  dispatch(getPrice2(response.data))
  dispatch(getCurrencyPrice2(response.data))

}



