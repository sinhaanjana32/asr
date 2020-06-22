import React from 'react';
import {makeStyles} from "@material-ui/core/Styles"
import { Card, CardActions, CardContent, CardMedia, CardActionArea, Typography, Button, Box, Grid } from '@material-ui/core';

import ba from "../images/ba.PNG";
import ct from "../images/ct.PNG";
import mt from "../images/mt.PNG";
import pixabay from "../images/pixabay.PNG";
import recipe from "../images/recipe.PNG";
import youtube from "../images/youtube.PNG";


const useStyles = makeStyles({
mainContainer: {
background: "#233",
height: "100%",

},

CardContainer: {
    maxWidth: 250,
    margin: "5rem",
 
},
title:{
  justifyContent:'center',
  textAlign: 'center',
  paddingTop: '30px',
  
},

})



const PortfolioHome = () => {
  const classes =useStyles()
return (
  <Box component="div" className={classes.mainContainer}>
   <Typography variant="h4" style={{color:"tan"}} className={classes.title}  >
                 PROJECT PORTFOLIO
                </Typography>
 
    <Grid container justify="center">

   <Grid item xs={12} sm={8}  md={4}>
   
      <Card className={classes.CardContainer}>
       <CardActionArea>
       <CardMedia component="img"
        alt="Project 1"
        height="140"
        image={ct}
       />
        <CardContent>
        <Typography gutterBottom variant="h5" >
           Corona Tracker
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          React | API | MUI | ChartJS
        </Typography>
        </CardContent>
          </CardActionArea>
        <CardActions>
        <Button size="small" style={{color:"tomato"}} href="https://github.com/sinhaanjana32/CoronaTracker" >
        GitHub
        </Button>
        <Button size="small"  style={{color:"tomato"}} href="https://youtu.be/is6V7DTxx5o" >
        Live Demo
        </Button>
        </CardActions>

      </Card>
   </Grid>
      <Grid item xs={12} sm={8}  md={4}>
        <Card className={classes.CardContainer}>
         <CardActionArea>
         <CardMedia component="img"
          alt="Project 2"
          height="140"
          image={recipe}
         />
          <CardContent>
          <Typography gutterBottom variant="h5">
           Get Recipe
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          React | API | MUI 
          </Typography>
          </CardContent>
            </CardActionArea>
          <CardActions>
          <Button size="small" style={{color:"tomato"}} href="https://github.com/sinhaanjana32/RecipeApp" >
        GitHub Code
        </Button>
        <Button size="small"  style={{color:"tomato"}} href="https://youtu.be/BhZB6-gqTBY">
        Live Demo
        </Button>
          </CardActions>
        </Card>
       </Grid>


       <Grid item xs={12} sm={8}  md={4}>
         <Card className={classes.CardContainer}>
          <CardActionArea>
          <CardMedia component="img"
           alt="Project 3"
           height="140"
           image={youtube}
          />
           <CardContent>
           <Typography gutterBottom variant="h5">
             Youtube Clone
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
           React | API | MUI 
           </Typography>
           </CardContent>
             </CardActionArea>
           <CardActions>
           <Button size="small" style={{color:"tomato"}} href="https://github.com/sinhaanjana32/YoutubeCopy" >
        GitHub Code
        </Button>
        <Button size="small"  style={{color:"tomato"}} href="https://youtu.be/RHR5psNx_IM">
        Live Demo
        </Button>
           </CardActions>

         </Card>
        </Grid>
        <Grid item xs={12} sm={8}  md={4}>
          <Card className={classes.CardContainer}>
           <CardActionArea>
           <CardMedia component="img"
            alt="Project 4"
            height="140" image={pixabay}
           />
            <CardContent>
            <Typography gutterBottom variant="h5">
              Hello Pixabay
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            React | API | MUI 
            </Typography>
            </CardContent>
              </CardActionArea>
            <CardActions>
            <Button size="small" style={{color:"tomato"}} href="https://github.com/sinhaanjana32/Pixabay-ImageFinder" >
        GitHub Code
        </Button>
        <Button size="small"  style={{color:"tomato"}} href="https://youtu.be/SmH2XpXybqc" >
        Live Demo
        </Button>
            </CardActions>
          </Card>
         </Grid>

         <Grid item xs={12} sm={8}  md={4}>
        <Card className={classes.CardContainer}>
         <CardActionArea>
         <CardMedia component="img"
          alt="Project 4"
          height="140"
          image={mt}
         />
          <CardContent>
          <Typography gutterBottom variant="h5">
             Movie Tracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          JS | API | HTML | CSS
          </Typography>
          </CardContent>
            </CardActionArea>
          <CardActions>
          <Button size="small" style={{color:"tomato"}} href="https://github.com/sinhaanjana32/movieinfo" >
        GitHub Code
        </Button>
        <Button size="small"  style={{color:"tomato"}} href="https://youtu.be/J9Fvwc0vXZI" >
        Live Demo
        </Button>
          </CardActions>

        </Card>


       </Grid>

       <Grid item xs={12} sm={8}  md={4}>
        <Card className={classes.CardContainer}>
         <CardActionArea>
         <CardMedia component="img"
          alt="Project 6"
          height="140"
          image={ba}
         />
          <CardContent>
          <Typography gutterBottom variant="h5">
         Budget App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          React | MUI | BootStrap
          </Typography>
          </CardContent>
            </CardActionArea>
          <CardActions>
          <Button size="small" style={{color:"tomato"}} href="https://github.com/sinhaanjana32/Budgetapp" >
        GitHub Code
        </Button>
        <Button size="small"  style={{color:"tomato"}} href="https://youtu.be/lw0kQat0S8Q" >
        Live Demo
        </Button>
          </CardActions>

        </Card>


       </Grid>

   </Grid>
  </Box>
);
};

export default PortfolioHome;
