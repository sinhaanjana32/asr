import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NavigationIcon from '@material-ui/icons/Navigation';



const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
    },
    control: {
    padding: theme.spacing(2),
    },
   rootCard:{
    height: 300,
    width: 200,
    background: "#511",
    margin: 30,
    justifyContent: 'spaceAround',
  
  },
  title: {
  marginBottom: "10px",
  textAlign: 'center',
  color:'tan'
  },
  icon:{
 
   fontSize: 'large',
   top: 50,
   left:50,
  },

}));

export default function SpacingGrid() {

  const classes = useStyles();


  return (
    <Grid container className={classes.mainContainer} >
      
      <Grid item xs={12}>
      <Divider variant="middle" />
      <Typography variant="h4" style={{color:"tan"}} className={classes.title}>
     
              FRONTEND FOCUSED: MERN Stack Experience

                </Typography>
        <Grid container justify="center">
        
            <Grid  item>
                        <Card className={classes.rootCard}>
          
                    <CardContent>
                    <Typography variant="h5" component="h2" style={{textAlign:'center', color:"tan", padding:'10px'}}>
                    <NavigationIcon fontSize="large"/>
                    <br/>
                    FrontEnd
                    <hr/>
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p" style={{textAlign:'center', color:"tan"}} >
                    HTML
                    <br />
                    CSS
                    <br />
                    JavaScript
                    <br />
                    React
                    </Typography>
                </CardContent>
                </Card>
            </Grid>

            <Grid  item>
                        <Card className={classes.rootCard}>
                    <CardContent>
                
                    <Typography variant="h5" component="h2" style={{textAlign:'center', color:"tan"}}>
                    <NavigationIcon fontSize="large"/>
                    <br/>
                    Framework & Library
                    <hr/>
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p" style={{textAlign:'center', color:"tan"}} >
                    Jquery
                    <br />
                    Bootstrap
                    <br />
                    ES6
                    <br />
                    Material UI &
                    <br/>
                     Many More
                    <br/>
                    
                    </Typography>
                </CardContent>
             
                </Card>

            </Grid>

            <Grid  item>
                        <Card className={classes.rootCard}>
                    <CardContent>
                    
                 
                    <Typography variant="h5" component="h2" style={{textAlign:'center', color:"tan"}}>
                    <NavigationIcon fontSize="large" />
                    <br/>
                    BackEnd
                    </Typography>
                    <hr/>
                    <br />
                  
                    <Typography variant="body2" component="p" style={{textAlign:'center', color:"tan"}} >
                   API & Json
                    <br />
                    NodeJs & Express
                    <br />
                    MangoDB
               
                    </Typography>
                </CardContent>
             
                </Card>
            </Grid>
        </Grid>
      </Grid>
     
    </Grid>
  );
}
