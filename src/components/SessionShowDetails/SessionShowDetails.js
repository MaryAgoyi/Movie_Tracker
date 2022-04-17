import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { detailsTvShow } from "../../features/tvShow/TvSliceService"; 
import { getDetailTvShow } from "../../features/tvShow/TvSlice";
import Header from "../Header/Header";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useTheme, useMediaQuery } from "@mui/material";

import SessionCardSmall from "../SessionCardSmall/SessionCardSmall";
import SessionCard from "../SessionCard/SessionCard";



const SessionShowDetails = () => {
  const { tv_Id } = useParams();
  const dispatch = useDispatch();
  const detailShow = useSelector(getDetailTvShow);



  useEffect(() => {
    dispatch(detailsTvShow(tv_Id));
  }, [dispatch, tv_Id]);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Header />
      <Container>
        {detailShow  ? (
          <>
                       
              {isMatch ? (
                <>
                  <SessionCardSmall/>
                </>
              ) : (
                <>
                   <SessionCard />
               
                </>
              )}
          
          
              <Typography
                sx={{
                  ml: 2,
                  mt: 10,
                  mb: 6,
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
                variant="h5"
                component="h1"
                alignItems="center"
              >
                Episode
              </Typography>
     
             
         
          </>
        ) : (
          <>
            <Typography
              sx={{ margin: 5, fontWeight: "bold" }}
              variant="h5"
              component="h1"
              align="center"
            >
              No TvShow Found
            </Typography>
          </>
        )}
      </Container>
    </>
  );
};

export default SessionShowDetails;
