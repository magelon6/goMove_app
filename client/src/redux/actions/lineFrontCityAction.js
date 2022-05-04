
import { GET_FRONT_CITY } from "../types/lineFrontCity.types";

export const getlineFrontCity = (cityLine) =>({
  type: GET_FRONT_CITY,
  payload : cityLine
})
