import React, {useEffect, useState } from 'react';
import { AppBar, Avatar, Box, Button, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "15%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px"
}));

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const [findCity, setFindCity] = useState("")
    const [copy, setCopy] = useState([])

    const dispatch = useDispatch()


    useEffect(()=> {
      setCopy(findCity)  // create  new copy
    }, [findCity])

    const submitHandler = (e) => {
    e.preventDefault()

    dispatch()

    }

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6'>
                    <Link to='/' >
                        Go Move
                    </Link>
                </Typography>
                <form onSubmit={(e) => submitHandler(e.target.value )}>

                <Search><InputBase placeholder='Search' value={findCity}></InputBase></Search>
                <button type='submit'> найти</button>
                </form>
                <Icons>
                    {/* Тут прописать условие авторизации пользователя */}
                    <Button variant="contained">
                        <Link to='/registration'>Register</Link>
                    </Button>
                    <Link to='/auth'>
                        <Button variant="outlined" sx={{color: "white"}}>Войти</Button>
                    </Link>
                    <Avatar sx={{width:35, height:35}} src='#'/>
                    <MenuIcon onClick={(e) => setOpen(true)} />
                </Icons>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default NavBar
