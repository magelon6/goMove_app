import { GET_CITY } from "../types/City.types";


export const getCity = (getCityFrom) => ({
  type: GET_CITY,
  payload : getCityFrom
})
