import * as React from 'react';
import {useState} from 'react';
import {Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography} from '@mui/material'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useDispatch, useSelector} from "react-redux";
import {THUNK_ACTION_REGISTER} from "../../redux/thunk/thunkRegistration";

const theme = createTheme();

export default function Registration() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({name: '', email: '', password: ''});
    const user = useSelector(state => state);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(THUNK_ACTION_REGISTER({name, email, password}));
    }


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Registration
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    label="User Name"
                                    name="name"
                                    autoComplete="name"
                                    onChange={(e) => {
                                            setError({name:''});
                                            setName(e.target.value);
                                        let reg = new RegExp(/^[A-Za-z\d_.]+$/).test(e.target.value);
                                        if (!reg) {
                                            setError({name: 'Name is not valid - spaces are not allowed'});
                                        }
                                    }}
                                    value = {name}
                                    required
                                    error = {Boolean(error?.name)}
                                    helperText={error?.name}
                                    variant={'outlined'}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setError({email: ''});
                                        setEmail(e.target.value);
                                        let reg = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                                        ).test(e.target.value);
                                        if (!reg) {
                                            setError({email: 'Email is not valid, please enter a valid email'});
                                            console.log(error.email);
                                        }
                                    }}
                                    value = {email}
                                    required
                                    error = {Boolean(error?.email)}
                                    helperText={error?.email}
                                    variant={'outlined'}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setError({password: ''});
                                        setPassword(e.target.value);
                                        let pass = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/).test(e.target.value);
                                        if (!pass) {
                                            setError({password: 'Password should contain at least one digit, one uppercase and one lowercase letter, and must be at least 6 characters long'});
                                        }
                                    }}
                                    value={password}
                                    required
                                    error = {Boolean(error?.password)}
                                    helperText={error?.password}
                                    variant={'outlined'}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign-Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <span>Already have an account? </span>
                                <Link href='/auth' variant="body2">
                                    Sign-In
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
