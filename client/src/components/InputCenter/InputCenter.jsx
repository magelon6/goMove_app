import {Autocomplete, Button, createFilterOptions, TextField} from '@mui/material'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPriceFromDB, getPriceFromDB2} from '../../redux/thunk/thunkPrice'
import {getlineFrontCity} from "../../redux/actions/lineFrontCityAction";


function InputCenter() {

    const city = useSelector((state) => state.city)
    const [data, setData] = useState("")
    const [data2, setData2] = useState("")


    const price = useSelector((state) => state.price)
    // const [chart, setChart] = useState(price)

    const dispatch = useDispatch()

    // const slice = city.map(el => ({id: el.id, label: `${el.city}, ${el.country}`}))


    const searchCity = () => {
        let new1 = data.split(',')
        let new2 = {city: new1[0], country: new1[1]}
        let new3 = data2.split(',')
        let new4 = {city: new3[0], country: new3[1]}

        dispatch(getPriceFromDB(new2))
        dispatch(getPriceFromDB2(new4))
// console.log(typeof data2.split(', ')[0]);
        const city1 = data.split(', ')[0];
        const city2 = data2.split(', ')[0];
        console.log(city1);
        const objInRedux = {
            city1,
            city2,
        }
        dispatch(getlineFrontCity(objInRedux));
    }

    const OPTIONS_LIMIT = 10;
    const defaultFilterOptions = createFilterOptions();

    const filterOptions = (options, state) => {
        return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
    };

    return (
        <>
            <Autocomplete
                filterOptions={filterOptions}
                selectOnFocus={true}
                id="select-on-focus"
                options={city}
                sx={{width: 400, marginRight: 5}}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) =>
                    <TextField
                        sx={{background: 'white', borderRadius: 5}}
                        {...params}
                        label="City"
                        placeholder="Please type city"
                        variant="outlined"

                    />}
                onChange={(e) => setData(e.target.innerText)}

            />
            <Autocomplete
                filterOptions={filterOptions}
                selectOnFocus={true}
                id="select-on-focus"
                options={city}
                sx={{width: 400, marginRight: 5}}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) =>
                    <TextField
                        sx={{background: 'white', borderRadius: 5}}
                        {...params}
                        label="City"
                        placeholder="Please type city"
                        variant="outlined"

                    />}
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
