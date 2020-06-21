import React from 'react'
import {Grid, Avatar, Typography,Box, Button
} from '@material-ui/core';
import { useHistory } from "react-router-dom";

import anjana from "../images/anjana.jpg"


import { makeStyles } from '@material-ui/core/styles';
import Typed from "react-typed"



//CSS Styles

const useStyles = makeStyles(theme =>({

anjana : {
  width: theme.spacing(15),
  height: theme.spacing(15),
  margin: theme.spacing(10),
},

title : {
  color: "tomato"
},

subtitle :{
  color: "tan",
  marginBottom: "3rem"
},

typedContainer : {
position: "absolute",
top: "50%",
left:"50%",
transform: "translate(-50%,-50%)",
width: "100vh",
textAlign: "center",
zIndex:1,

},

}));



const Header = ()=> {
  
const classes =useStyles()
const history = useHistory();


return (

<Box className={classes.typedContainer} >
      <Grid container justify="center">
      <Avatar className={classes.anjana} src={anjana} alt="Anjana" />
      </Grid>
        <Typography className={classes.title} variant="h4">
        <Typed strings= {["Anjana Sinha"]} typedSpeed={40} />
        </Typography>
<br/>
      <Typography className={classes.subtitle} variant="h5">
      <Typed strings= {["Web Developer", "FrontEnd Focused", "WordPress Developer"]}
       typedSpeed={40}
       backSpeed ={60}
       loop
       />
      </Typography>

      <Button style={{margin: '10px'}} variant="contained" color="secondary" onClick={() => history.push('/Portfolio')} type="button" > Go To PortFolio </Button>
    {  /* <Button style={{margin: '10px'}} variant="contained" color="primary" onClick={() => history.push('/Resume')} type="button" > Ask for Website </Button> */}
 

</Box>

);
};

export default Header;
