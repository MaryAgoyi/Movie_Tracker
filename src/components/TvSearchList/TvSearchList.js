import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import TvShowCard from "../TvShowCard/TvShowCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { getsearch, getSearchedTvShow } from "../../features/tvShow/TvSlice";

const TvSearchList = () => {
  const search = useSelector(getsearch);
  const show = useSelector(getSearchedTvShow);


  return (
    <>
      <Container>
        <Box sx={{ display: "flex", marginTop: 12, justifyContent: "center" }}>
          <SearchBar />
        </Box>
        {show ?   (
          <>
            <Typography
              sx={{
                margin: 5,
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
              variant="h5"
              component="h1"
              align="center"
            >
              {`${search} TV Show`}
            </Typography>

            <Grid container align="center">
              {show.map((showItem) => (
                <TvShowCard key={showItem.id} showTV={showItem} />
              ))}
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

export default TvSearchList;
