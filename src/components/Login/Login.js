import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/AuthSlice";
import Spinner from "../Spinner";

export default function Login() {
const { user, isloading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setformData] = useState({
    username: "",
    password: "",
    apikey: "",
  });

  const { username, password, apikey } = formData;


 useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset())
    }
    if (isSuccess || user) {
       dispatch(reset())
      navigate("/");
    }
   
  }, [user  ,isError]);

  if(isloading){
    <Spinner/>
  }
  
  const handleChange = (e) => {
   
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClick = (e) => {
    if (!username || !password || !apikey) {
      toast.error("Please provide your TMDB  account details ");
    } else {
      const userData = { username, password, apikey };
      
      dispatch(login(userData));
    }
  };
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter your TMDB account details
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="apikey"
            label="API_key"
            id="apikey"
            autoComplete="apikey"
            value={apikey}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClick}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href="https://www.themoviedb.org/signup"
                target="_blank"
                variant="body2"
              >
                {"Don't have a TMDB account? click to Sign up for an account"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
