import React from 'react'
import { Container } from '@mui/material';
import Typography from "@mui/material/Typography";
import TvShowCard from '../TvShowCard/TvShowCard';
import Grid from "@mui/material/Grid";


import { useSelector } from 'react-redux';

const TvFavouriteList = () => {

  const show = useSelector((state) => state.tvShow.favoritesTvShow);

 
  return (
    <>
    
    <Container  >
  
   
    {show ?
       
   <>
   <Typography sx={{margin:5, textTransform: "capitalize", fontWeight: 'bold'}} variant="h5" component="h1" align="center" >

   Favourite TV Show
    </Typography>

    <Grid container align="center">
      {show.map((showItem) => (
      
    <TvShowCard key={showItem.id} showTV={showItem}/>
      
     
       ))}
    </Grid>

    </>
    :
    <>
    <Typography sx={{margin:5, fontWeight: 'bold'}} variant="h5" component="h1" align="center" >
      
      No TvShow Found
      </Typography>
    </>
   }
         
         </Container>
   </>
  )
}

export default TvFavouriteList