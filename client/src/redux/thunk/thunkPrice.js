
import {getPrice, getPrice2} from "../actions/priceAction";
import axios from 'axios'

export const getPriceFromDB = ({city, country}) => async (dispatch) => {
    const response = await axios.post("http://localhost:5001/api/price", {city, country})
    dispatch(getPrice(response.data))
}



export const getPriceFromDB2 = ({city, country}) => async (dispatch) => {

  const response = await axios.post("http://localhost:5001/api/price", {city, country})
  dispatch(getPrice2(response.data))
}



