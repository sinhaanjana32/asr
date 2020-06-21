
  
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  title: {
    marginBottom: "70px",
    textAlign: 'center',
    },

   
}));

export default function ContactMe() {
  
  const classes = useStyles();
  return (
 
    <Box margin= {10} className={classes.title} >
      <Typography  variant="h4" style={{color:"tan"}}  gutterBottom color="white">
      CONTACT ME
      </Typography>
      <Typography  variant="h6" style={{color:"tomato"}}  gutterBottom color="white">
      sinhanjana32@gmail.com | +358 468409243
      </Typography>
      <Button style={{marginTop: '30px'}} variant="contained" color="secondary" href="mailto:sinhaanjana32@gmail.com" >Email Now</Button>
      </Box>
 
  );
}

