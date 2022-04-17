import React from 'react'
import { Container } from '@mui/material';
import Typography from "@mui/material/Typography";
import TvShowCard from '../TvShowCard/TvShowCard';
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import { tvSave } from '../../features/tvShow/TvSliceService';


const Viewed = () => {
 // const show = useSelector((state) => state.tvShow.viewedTvShow);
 const show = JSON.parse(localStorage.getItem("view"))
  const dispatch =useDispatch()
 dispatch(tvSave())
  
 return (
  <>
  <Header/>
  <Container  >

 
  {show ?
     
 <>
 <Typography sx={{margin:5, textTransform: "capitalize", fontWeight: 'bold'}} variant="h5" component="h1" align="center" >

Viewed TV Show
  </Typography>

  <Grid container align="center">


 
     {show.map(element => (
       element.map((showItem) => (
     <TvShowCard key={showItem.id} showTV={showItem}/>
     

         
           ))
)

     )}

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


export default Viewed