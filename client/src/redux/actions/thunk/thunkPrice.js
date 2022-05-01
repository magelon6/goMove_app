import { getPrice } from "../priceAction"
import axios from 'axios'

export const getPriceFromDB = ({city, country}) => async (dispatch) => {
  console.log(city, country, '444444444')
  const response = await axios.post("http://localhost:5001/api/price" , {city, country})
  dispatch(getPrice(response.data))
}
