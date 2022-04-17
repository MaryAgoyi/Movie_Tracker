import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {  detailsTvShow } from "../../features/tvShow/TvSliceService";
import { getDetailTvShow } from "../../features/tvShow/TvSlice"
import Header from "../Header/Header";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import DetailsCardSmall from "../DetailsCardSmall/DetailsCardSmall";

import { useTheme, useMediaQuery } from "@mui/material";
import TvDetailsCard from "../TvDetailsCard/TvDetailsCard";

import DetailsCard from "../DetailsCard/DetailsCard";

const TvShowDetailsSaved = () => {
  const { tv_Id } = useParams();
  
 const detailShow  = JSON.parse(localStorage.getItem(tv_Id));
 

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
                  <DetailsCardSmall />
                </>
              ) : (
                <>
                   <DetailsCard  />
               
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
                Seasons
              </Typography>
     
             
              <Grid container  
               spacing={2}>
              

                
                {detailShow.seasons ? (
                  
                     detailShow.seasons.map((item) => (
                      <Grid item key={item.id} md={2} xs={6}>
                    <TvDetailsCard  TvShow={item} />
                    </Grid>
                  ))

                ) : (
                  <>
                    <Typography
                      sx={{ margin: 5, fontWeight: "bold" }}
                      variant="h5"
                      component="h1"
                      align="center"
                    >
                      No Season Found
                    </Typography>
                  </>
                )}
              
              </Grid>
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

export default TvShowDetailsSaved;