import React, {useState} from 'react'
import {Grid,
 ListItemText, Avatar,Divider, List,Typography,Box
} from '@material-ui/core';
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import avatar from "../avatar.png"

import { makeStyles } from '@material-ui/core/styles';
import Typed from "react-typed"


//CSS STyles

const useStyles = makeStyles(theme =>({
avatar : {
  width: theme.spacing(15),
  height: theme.spacing(15),
  margin: theme.spacing(15),
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
return (

<Box className={classes.typedContainer} >
      <Grid container justify="center">
      <Avatar className={classes.avatar} src={avatar} alt="Anjana" />
      </Grid>
        <Typography className={classes.title} variant="h4">
        <Typed strings= {["Anjana Sinha"]} typedSpeed={40} />
        </Typography>
<br/>
      <Typography className={classes.subtitle} variant="h5">
      <Typed strings= {["WebDesign", "Web Development", "Mern Stack"]}
       typedSpeed={40}
       backSpeed ={60}
       loop
       />
      </Typography>
      <br/>
      

</Box>

);
};

export default Header;
