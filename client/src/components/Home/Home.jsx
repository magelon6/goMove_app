import React from 'react'
import { Grid } from '@mui/material'
import MainGraph from '../MainGraph/MainGraph'
import StaticGraph from '../StaticGraph/StaticGraph'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getCityFromDB } from '../../redux/actions/thunk/thunkCity'

function Home() {

  // временно закоменчено

//   const city = useSelector((state) => state.city)


//   const dispatch = useDispatch()

  
// useEffect(() => {
//   dispatch(getCityFromDB())
// })




//   return (
//    <>
//    {city && city.map((el)=>
//    <div>

//    <p> {el.city}</p>
//    <p> {el.city_id}</p>
//    </div>


//    )}
//    </>
//   )
  return ( 
    <div style={{margin: 30}}>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
            <StaticGraph />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <StaticGraph />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <StaticGraph />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <StaticGraph />
        </Grid>
      </Grid>
      <MainGraph />
    </div>
  )
}

export default Home
