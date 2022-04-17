import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import Typography from "@mui/material/Typography";
import DrawerComponent from "./DrawerComponent";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/AuthSlice";

const Header = () => {
  const navbar = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.5rem",
    marginRight: "30px",
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
 

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#121320" }}>
      <Toolbar>
        {isMatch ? (
          <>
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item sx={{ display: "flex", placeItems: "center" }} xs={9}>
                <DrawerComponent />

                <Link style={navbar} to="/">
                  {" "}
                  <Typography variant="h6" sx={{ ml: 6 }}>
                    {" "}
                    <LiveTvOutlinedIcon sx={{ mr: 1 }} />
                    TvShow Tracker
                  </Typography>
                </Link>
              </Grid>
              <Button onClick={handleLogout} variant="outlined">
                {" "}
                Logout
              </Button>
            </Grid>
          </>
        ) : (
          <>
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item sx={{ display: "flex" }} md={5}>
                 <Link to="/" style={navbar}><Typography  variant="h6" sx={{ ml: 6 }}>
                 
                    {" "}
                    <LiveTvOutlinedIcon  sx={{ mr: 2 }} />
                    TvShow Tracker
                  
                </Typography></Link>
              </Grid>
              <Grid item md={2} sx={{ display: "flex" }}>
                <Link style={navbar} to="/Favorites">
                  Favorites
                </Link>
              </Grid>
              <Grid item md={3} sx={{ display: "flex" }}>
                <Link style={navbar} to="/Viewed">
                  Viewed
                </Link>
              </Grid>

              <Grid item md={2}>
                <Box>
                  <Button onClick={handleLogout} variant="outlined">
                    {" "}
                    Logout
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
