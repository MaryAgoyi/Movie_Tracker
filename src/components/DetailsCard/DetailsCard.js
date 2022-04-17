import React from "react";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import { img_300, img_NotFound } from "../../common/apis/tvShowConfig";
import { Paper } from "@mui/material";
import { getDetailTvShow } from "../../features/tvShow/TvSlice";
import { useSelector } from "react-redux";

const DetailsCard = () => {
  const detailShow = useSelector(getDetailTvShow);
  return (
    <>
      <Paper
        sx={{
          marginTop: 17,
          marginBottom: 5,
          bgcolor: "#bac0c2",
          boxShadow: 6,
          borderRadius: 2,
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "450px",
        }}
        elevation={20}
        
      >
        <Box>
          {detailShow.poster_path ? (
            <img src={`${img_300}/${detailShow.poster_path}`} alt={detailShow.name} />
          ) : (
            img_NotFound
          )}
        </Box>
        <Box>
          <Typography
            sx={{
              marginLeft: 3,
              mb:2,
              fontWeight: "bold",
            }}
            variant="h4"
            component="h2"
            align="left"
          >
             {detailShow.name}
            {detailShow.first_air_date
              ? " (" + detailShow.first_air_date.substring(0, 4) +")"
              : ".."}
          </Typography>
          
          <Typography
            sx={{
              marginLeft: 3,

              fontWeight: "bold",
            }}
            variant="h5"
            component="h1"
            align="left"
          >
            Overview
          </Typography>
          <Typography
            sx={{ mx: 3 }}
            variant="body1"
            component="h1"
            align="left"
            textAlign="justify"
          >
            {detailShow.overview}
          </Typography>
          <Typography
            sx={{ marginLeft: 3, mt: 3 }}
            variant="body1"
            component="h1"
            align="left"
          >
            {" "}
            Created By :
            {detailShow.created_by && detailShow.created_by
              ? detailShow.created_by.map((item) => " " + item.name + "     ")
              : "..."}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default DetailsCard;
