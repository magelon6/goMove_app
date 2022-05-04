import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCityFromDB} from '../../redux/thunk/thunkCity'

import InputCenter from '../InputCenter/InputCenter'
import StaticGraph from '../StaticGraph/StaticGraph'
import Grid from "@mui/material/Grid";

import Chart from '../Chart/Chart'
import Chart1 from '../SecondChart/SecondChart'

import backgroundImg from '../../images/background.jpg'

const divStyle = {
    height: '100vh',
    maxHeight: '840px',
    position: 'relative',
    transition: 'height 99999s',
    backgroundImage: `url(${backgroundImg})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
}

function Home() {
    const price = useSelector((state) => state.price)
    const price2 = useSelector((state) => state.price2)
    const [chart, setChart] = useState(price)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCityFromDB())
    }, [])

    useEffect(() => {
        console.log('111111111' , price);
        setChart(!!price.length)
      }, [price])

    return (
        <>
        <div style={divStyle}>
            {/* <h1>Some text</h1> */}
            <div className='input-wrapper' style={{ display: 'flex', flexDirection: 'column', height: '100%', textAlign: 'center', width: '100%'}}>
                <div style={{display: 'flex',  justifyContent: 'center', marginTop: '25vh'}}>
                    <InputCenter/>
                </div>
            </div>
        </div>
        <div style={{margin: 30}}>
            <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                    <StaticGraph/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StaticGraph/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StaticGraph/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StaticGraph/>
                </Grid>
            </Grid>
            {chart
            &&
            <>
            <Chart/>
            <Chart1/>
            </>
            }
        </div>
        </>

    )
}

export default Home
