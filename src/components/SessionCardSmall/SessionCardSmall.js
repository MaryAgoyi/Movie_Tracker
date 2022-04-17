import React from "react";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import { img_200, img_NotFound } from "../../common/apis/tvShowConfig";
import { Card, CardActionArea, CardMedia, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { getDetailTvShow } from "../../features/tvShow/TvSlice";

const SessionCardSmall = () => {
  const detailShow = useSelector(getDetailTvShow);
  return (
    <>
      <Paper
           sx={{
            marginTop:10,
         bgcolor: "#bac0c2",
          boxShadow: 6,
          borderRadius: 2,
          p: "2px 4px",
          opacity: 1.0,
          alignItems: "center",
          width: "100%",
          height: "500px",
        }}
        
      >
       <Card sx={{ width: 250 , margin:3,
    '&:hover': {
      transform:"scale(1.1)",
      transition: "all 0.3s",
    }, cursor: "pointer"}} >
       <CardActionArea>
            <CardMedia
        component="img"
        height="200"
        width= "200"
        image={
          detailShow.poster_path
            ? `${img_200}/${detailShow.poster_path}`
            : img_NotFound
        }
        alt={detailShow.name}
        
      />
   
     
   
    </CardActionArea>
    
  </Card> 
        <Box>
          <Typography
            sx={{
              marginLeft: 3,

              fontWeight: "bold",
            }}
            variant="h6"
            component="h3"
            align="left"
          >
            {detailShow.name}
            {detailShow.first_air_date
              ? " (" + detailShow.first_air_date.substring(0, 4)+")"
              : ".."}
          </Typography>
          
          <Typography
            sx={{
              marginLeft: 3,
              mt:1,
              fontWeight: "bold",
            }}
            variant="h7"
            component="h4"
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
        
        </Box>
      </Paper>
    </>
  );
};
         
export default SessionCardSmall;
