import React from "react";

import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { img_300, img_NotFound } from "../../common/apis/tvShowConfig";
import { useSelector } from "react-redux";
import { getDetailTvShow } from "../../features/tvShow/TvSlice";

const DetailsCardSmall = () => {
  const detailShow = useSelector(getDetailTvShow);
  return (
    <>
      <Paper
        sx={{
          marginTop: 10,
          bgcolor: "#bac0c2",
          boxShadow: 6,
          borderRadius: 2,
          p: "2px 4px",
          opacity: 1.0,
          
          alignItems: "center",
          width: "100%",
          height: "760px",
        }}
      >
        <Box
          sx={{
            marginTop: 2,ml: 5,
          }}
        >
          {detailShow.poster_path ? (
            <img
              src={`${img_300}${detailShow.poster_path}`}
              alt={detailShow.name}
            />
          ) : (
            img_NotFound
          )}
        </Box>
        <Box>
          <Typography
            sx={{
              marginLeft: 3,
       mb:2,mt:2,
              fontWeight: "bold",
            }}
            variant="h5"
            component="h2"
            
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
            variant="h7"
            component="h3"
            align="left"
          >
            Overview
          </Typography>
          <Typography
            sx={{ mx: 3 }}
            variant="body2"
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

export default DetailsCardSmall;
