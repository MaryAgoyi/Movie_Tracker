import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { img_200, img_NotFound } from "../../common/apis/tvShowConfig";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TvShowCard = ({ showTV }) => {
  const saveItem = useSelector((state) => state.tvShow.save);

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
        <Link to={`/TvShow/${showTV.id}`} style={{ textDecoration: "none" }}>
          <Card
            sx={{
              width: 200,
              margin: 5,
              "&:hover": {
                transform: "scale(1.1)",
                transition: "all 0.3s",
              },
              cursor: "pointer",
            }}
          >
            <CardActionArea>
              <Badge
                badgeContent={showTV.vote_average}
                color={showTV.vote_average > 6 ? "primary" : "secondary"}
                overlap="circular"
                sx={{
                  color: "green",
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  width="200"
                  image={
                    showTV.poster_path
                      ? `${img_200}/${showTV.poster_path}`
                      : img_NotFound
                  }
                  alt={showTV.name}
                />
              </Badge>
              <CardContent>
                <Typography variant="h7" component="h3">
                  {showTV.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {showTV.first_air_date}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                {saveItem ? "Saved" : ""}
              </Button>
            </CardActions>
          </Card>
        </Link>
      </Grid>
    </>
  );
};

export default TvShowCard;
