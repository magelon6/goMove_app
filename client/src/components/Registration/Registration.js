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
    const user = useSelector(state => state);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(THUNK_ACTION_REGISTER({name, email, password}));
        console.log(user)
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
                                    required
                                    fullWidth
                                    id="name"
                                    label="User Name"
                                    name="name"
                                    autoComplete="name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
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
