import React from 'react'
import Navbar from "./Navbar";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigationAction} from "@material-ui/core"
import Facebook from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({

    title: {
      marginBottom: "70px",
      textAlign: 'center',
      },
  
      root: {
        "&. MuiBottomNavigationAction-root":{
          minWidth: 0,
          maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
          fill:"tomato",
          fontSize:"1.8rem",
          "&:hover": {
            fill:"tan",
            fontSize:"2.8rem",
          },
        }
       }
     
  }));

const TextForm = () => {
    const classes = useStyles();
    return (
        <div>
        <Navbar/>
        <Box margin= {10} className={classes.title} >
      <Typography  variant="h4" style={{color:"tan"}}  gutterBottom color="white">
      Contact or Hire Me
      </Typography>
      <Typography  variant="h6" style={{color:"tomato"}}  gutterBottom color="white">
      sinhanjana32@gmail.com 
      <br/> +358 468409243
      </Typography>
      <Button style={{marginTop: '50px'}} variant="contained" color="secondary" href="mailto:sinhaanjana32@gmail.com" >Email Now</Button>
      </Box>
 
  <div style={{marginBottom:0, textAlign:'center', fontSize:70}}>
  <BottomNavigationAction className={classes.root} style={{padding:0}}
 icon={<LinkedIn />}
 href="https://www.linkedin.com/in/anjana-sinha/"
  />
<BottomNavigationAction className={classes.root} style={{padding:0}}
icon={<Facebook/>}
href="https://www.facebook.com/anjana.sinhaa"/>

  <BottomNavigationAction className={classes.root} style={{padding:0}}
  icon={<Instagram/>}
  href="https://www.instagram.com/anjana.sinha.india/"/>
   <BottomNavigationAction className={classes.root} style={{padding:0}}
  icon={<GitHub/>}
  href="https://github.com/sinhaanjana32"/>
  <br/>
  <Typography  variant="h6" style={{color:"tan"}}  gutterBottom color="white">
    May the code be with you!
   
      </Typography>

  </div>

        </div>
    )
}

export default TextForm
