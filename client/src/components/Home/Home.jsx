import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCityFromDB } from '../../redux/actions/thunk/thunkCity'

function Home() {

  const city = useSelector((state) => state.city)


  const dispatch = useDispatch()

  
useEffect(() => {
  dispatch(getCityFromDB())
})




  return (
   <>
   {city && city.map((el)=>
   <div>

   <p> {el.city}</p>
   <p> {el.city_id}</p>
   </div>


   )}
   </>
  )
}

export default Home
