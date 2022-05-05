import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCityFromDB} from '../../redux/thunk/thunkCity'

import InputCenter from '../InputCenter/InputCenter'
import StaticGraph from '../StaticGraph/StaticGraph'
import Grid from "@mui/material/Grid";

function Home() {
    const price = useSelector((state) => state.price)
    const price2 = useSelector((state) => state.price2)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCityFromDB())
    }, [])


    return (
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
            <InputCenter/>
             
        </div>

    )
}

export default Home
