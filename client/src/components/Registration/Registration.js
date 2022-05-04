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
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // to prevent hacking by JS injection
        if (error.name || error.email || error.password) {
            setError({message: 'Please fill all fields correctly'});
            return;
        }
        setSuccess(true);
        dispatch(THUNK_ACTION_REGISTER({name, email, password}));
    }


    return (
        <>
            {/* If registration successful showing this page */}
            {success ? (
                <section>
                    <Container component="main" maxWidth="xs">
                        <Grid container spacing={3}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100vh',
                                }}>
                                <Typography variant="h4" gutterBottom>
                                    Thank you for registration!
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <p>
                                        Please check your email to confirm your account. If you don't see the email,
                                        check your spam folder.
                                        You can also check your email later. If you still don't see the email, please <a
                                        href="mailto:a@artka.dev"> contact us.</a>
                                        <br>
                                            You can login to your account before you confirm your email, but some
                                            features may be disabled.
                                        </br>
                                    </p>
                                </Typography>
                                <Link href="/auth">
                                    <Button variant="contained" color="primary" size="large">
                                        Login
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Container>
                </section>
                //    if registration failed - showing this
            ) : (
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
                                                setError({name: ''});
                                                setName(e.target.value);
                                                let reg = new RegExp(/^[A-Za-z\d_.]+$/).test(e.target.value);
                                                if (!reg) {
                                                    setError({name: 'Name is not valid - spaces are not allowed'});
                                                }
                                            }}
                                            value={name}
                                            required
                                            error={Boolean(error?.name)}
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
                                            value={email}
                                            required
                                            error={Boolean(error?.email)}
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
                                            error={Boolean(error?.password)}
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
                                    disabled={!!(error.name || error.email || error.password)}
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
            )}
        </>
    );
}
