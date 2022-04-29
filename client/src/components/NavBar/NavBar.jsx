import React, { useState } from 'react';
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Avatar, Menu, MenuItem, Button} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

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

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6'>
                    <Link to='/' >
                        Go Move
                    </Link>
                </Typography>
                <Search><InputBase placeholder='Search'></InputBase></Search>
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