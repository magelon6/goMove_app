import React from 'react'
import {FormControl, InputLabel,NativeSelect, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrencyFromDB } from '../../redux/thunk/thunkCurrency'
import { useEffect } from 'react'
import { getPrice, getPrice2 } from '../../redux/actions/priceAction'

function Currency() {

  const currency = useSelector((state) => state.currency)
  let price = useSelector((state) => state.price)
  let price2 = useSelector((state) => state.price2)

  

  const dispatch = useDispatch()

  useEffect(() =>  {
  dispatch(getCurrencyFromDB())

}, [])

const searchHandler = (e) => {
  
  const rates = currency.find((el) => el.currency === e.target.value)
  
   price = price.map((el) => {
      return {...el, price: Math.ceil(el.price * rates.usd) }
    })
    price2 = price2.map((el) => {
      return {...el, price: Math.ceil(el.price * rates.usd) }
    })  
  dispatch(getPrice(price))
  dispatch(getPrice2(price2))
} 



  return (
    <>
    <Box sx={{ minWidth: 100 }}></Box>
    <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
      
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    onChange={searchHandler}
    inputProps={{
      name: 'currency',
      id: 'uncontrolled-native',
    }}
  >
    {
      currency?.map((el) => <option key={el.currency} value={el.currency}>{el.currency}</option>)
    }
    
    
  </NativeSelect>
</FormControl>
    </>
  )
}

export default Currency
