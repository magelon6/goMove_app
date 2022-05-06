import {Autocomplete, Button, TextField} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getlineFrontCity } from '../../redux/actions/lineFrontCityAction'
import {getPriceFromDB, getPriceFromDB2} from '../../redux/thunk/thunkPrice'




function InputCenter() {
  
    const city = useSelector((state) => state.city)
    const [slice, setSlice] = useState([])
    const [data, setData] = useState("")
    const [data2, setData2] = useState("")

    const dispatch = useDispatch()
    useEffect(()=> {
      setSlice(city.map(el => ({label: `${el.city}, ${el.country}`})))
    }, [city])

    const searchCity = () => {
        let new1 = data.split(',')
        let cityFirst;
        let country;
        if ( new1.length >= 3 ) {
          cityFirst = `${new1[0]},${new1[1]}`
        country= new1[2]
      } else {
        cityFirst = new1[0]
        country= new1[1]
      }
      let new2 = {city: cityFirst, country }

      let new3 = data2.split(',')
      let cityFirst1;
      let country1;
      if ( new3.length >= 3 ) {
        cityFirst1 = `${new3[0]},${new3[1]}`
      country1= new3[2]
    } else {
      cityFirst1 = new3[0]
      country1= new3[1]
    }
      
      
      
      

      let new4 = {city: cityFirst1, country: country1}

        dispatch(getPriceFromDB(new2))
        dispatch(getPriceFromDB2(new4))

        const city1 = data.split(', ')[0];
        const city2 = data2.split(', ')[0];
       
        const objInRedux = {
          city1,
          city2,
        }

        dispatch(getlineFrontCity(objInRedux))
    }

    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"             
                options={slice}
                sx={{width: 300}}
                renderInput={(params) => <TextField sx={{background: 'white'}} {...params} label="City"/>}
                onChange={(e) => setData(e.target.innerText)}
                
                />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={slice}
            sx={{width: 300}}
            renderInput={(params) => <TextField sx={{background: 'white'}} {...params} label="City"/>}
            onChange={(e) => setData2(e.target.innerText)}
            />
        <Button onClick={searchCity} variant="contained" sx={{background: '#FFB703', marginLeft: '20px'}}>
          Find city
        </Button>
          


        {/* {chart
            &&
            <>
            <Chart/>
            <Chart1/>
            </>
            } */}
      </>
  )
}

export default InputCenter
