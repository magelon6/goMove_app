import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const theme = createTheme();

function UserProfile() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userData = useSelector((store) => store.user);
  const [inputs, setInputs] = useState({ ...userData });

  const handleChange = (e) => {
    if (e.target.files) {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        file: e.target.files[0],
      }));
    } else {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch()
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
                      <div className="container col-md-4 mb-3 my-3">
                              <div className="card">
                                <div className="d-flex flex-column align-items-center text-center my-3">
                                  <img src={inputs.photo ? `http://localhost:5001/img/${userData.photo}` : 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'} alt="profilephoto" className="rounded" width="350" />
                                  <div className="my-3">
                                    <h4>
                                     
                                      {inputs.name}
                                    </h4>
                                    <input
                                      className="inputphoto input-file"
                                      id="file"
                                      onChange={handleChange}
                                      type="file"
                                      name="photo"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                    <Typography component="h1" variant="h5">
                        My Profile
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
                            Edit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
  );
}

export default UserProfile;
