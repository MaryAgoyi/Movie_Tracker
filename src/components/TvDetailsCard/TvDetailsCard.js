
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { img_200, img_NotFound } from "../../common/apis/tvShowConfig";
import { Link } from "react-router-dom";

const TvDetailsCard = ({ TvShow }) => {
  
  return (
    <>
  
     <Box >
  <Link to={`/TvSession/${TvShow.id}`} style={{ textDecoration: 'none' }} >
     <Card sx={{ width: 150 , margin:3,
    '&:hover': {
      transform:"scale(1.1)",
      transition: "all 0.3s",
    }, cursor: "pointer"}} >
       <CardActionArea>
       
     <CardMedia
        component="img"
        height="200"
        width= "150"
        image={
          TvShow.poster_path
            ? `${img_200}/${TvShow.poster_path}`
            : img_NotFound
        }
        alt={TvShow.name}
        
      />
   
  
     
    <CardContent> 
     
        <Typography  variant="h7" component="h3" >
          {TvShow.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
        {TvShow.air_date  ? " "+ TvShow.air_date.substring(0,4) : ".."}
       
       
         </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Save
      </Button>
    </CardActions>
  </Card> 
    </Link>
</Box>

</>
  )
}

export default TvDetailsCard