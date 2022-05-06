import { getCurrency } from "../actions/currencyAction"
import axios from 'axios'

export const getCurrencyFromDB = () => async (dispatch) => {
    const response = await axios.get("http://localhost:5001/api/currency")
  
    dispatch(getCurrency(response.data))
}
