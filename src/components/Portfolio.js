import React from 'react';
import {makeStyles} from "@material-ui/core/Styles"
import { Card, CardActions, CardContent, CardMedia, CardActionArea, Typography, Button, Box, Grid } from '@material-ui/core';

import Navbar from "./Navbar";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/react-redux.jpg";
import project4 from "../images/mern-stack.jpg";



const useStyles = makeStyles({
mainContainer: {
background: "#233",
height: "100%",
},

CardContainer: {
  maxWidth: 345,

   margin: "5rem auto",
},

})




const Portfolio = () => {
  const classes =useStyles()
return (
  <Box component="div" className={classes.mainContainer}>
  <Navbar />
    <Grid container justify="center">

    <Grid item xs={12} sm={8}  md={6}>
      <Card className={classes.CardContainer}>
       <CardActionArea>
       <CardMedia component="img"
        alt="Project 1"
        height="140"
        image={project1}
       />
        <CardContent>
        <Typography gutterBottom variant="h5">
           Project 1
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          lorem30 anjjann hslahsdlj shahsahlorem pictinkshak ufyqgsajk wqjqwertg
        </Typography>
        </CardContent>
          </CardActionArea>
        <CardActions>
        <Button size="small" color="Primary">
        Share
        </Button>
        <Button size="small" color="Primary">
        Live Demo
        </Button>
        </CardActions>

      </Card>
   </Grid>
      <Grid item xs={12} sm={8}  md={6}>
        <Card className={classes.CardContainer}>
         <CardActionArea>
         <CardMedia component="img"
          alt="Project 2"
          height="140"
          image={project2}
         />
          <CardContent>
          <Typography gutterBottom variant="h5">
             Project 2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            lorem30 anjjann hslahsdlj shahsahlorem pictinkshak ufyqgsajk wqjqwertg
          </Typography>
          </CardContent>
            </CardActionArea>
          <CardActions>
          <Button size="small" color="Primary">
          Share
          </Button>
          <Button size="small" color="Primary">
          Live Demo
          </Button>
          </CardActions>

        </Card>


       </Grid>
       <Grid item xs={12} sm={8}  md={6}>
         <Card className={classes.CardContainer}>
          <CardActionArea>
          <CardMedia component="img"
           alt="Project 2"
           height="140"
           image={project3}
          />
           <CardContent>
           <Typography gutterBottom variant="h5">
              Project 3
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             lorem30 anjjann hslahsdlj shahsahlorem pictinkshak ufyqgsajk wqjqwertg
           </Typography>
           </CardContent>
             </CardActionArea>
           <CardActions>
           <Button size="small" color="Primary">
           Share
           </Button>
           <Button size="small" color="Primary">
           Live Demo
           </Button>
           </CardActions>

         </Card>
        </Grid>
        <Grid item xs={12} sm={8}  md={6}>
          <Card className={classes.CardContainer}>
           <CardActionArea>
           <CardMedia component="img"
            alt="Project 4"
            height="140" image={project4}
           />
            <CardContent>
            <Typography gutterBottom variant="h5">
               Project 4
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              lorem30 anjjann hslahsdlj shahsahlorem pictinkshak ufyqgsajk wqjqwertg
            </Typography>
            </CardContent>
              </CardActionArea>
            <CardActions>
            <Button size="small" color="Primary">
            Share
            </Button>
            <Button size="small" color="Primary">
            Live Demo
            </Button>
            </CardActions>
          </Card>
         </Grid>

   </Grid>
  </Box>
);
};

export default Portfolio;
