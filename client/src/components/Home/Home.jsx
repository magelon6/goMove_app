//import { Input } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCityFromDB } from '../../redux/actions/thunk/thunkCity'

import InputCenter from '../InputCenter/InputCenter'

function Home() {

  const price = useSelector((state) => state.price)


  const dispatch = useDispatch()

  
useEffect(() => {
  dispatch(getCityFromDB())
},[])

// useEffect(() => {
//   dispatch(getPriceFromDB())
// }, [])



  return (
   <>
<center >



<InputCenter/>

   
   {price && price.map((el)=>
   <div key={el.id} style={{border: '2px solid black'}}>

   <p> {el.name}</p>
   <p> {el.price}</p>

  
   </div>
)}
</center>


   </>
  )
}

export default Home
