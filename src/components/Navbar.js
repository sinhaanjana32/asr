import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {
AppBar,Toolbar, ListItem, IconButton,ListItemIcon, ListItemText, Avatar,Divider, List,Typography,Box
} from '@material-ui/core';
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import avatar from "../avatar.png"
import MobilRightMenuSlider from "@material-ui/core/Drawer" 
import { makeStyles } from '@material-ui/core/styles';
import Footer from "./Footer";


/*CSS styles   MobilRightMenuSlider is custom */

const useStyles = makeStyles(theme => ({
 menuSliderContainer : {
   width: 250,
   background: "#511",
   height:"100%"
 },
avatar :{
display: "block",
margin: "0.5rem auto",
width : theme.spacing(13),
height: theme.spacing(13),
},

listItem: {
  color: "tan"
}

}));

const menuIcons =[
{
listIcon: <Home />,
listText: "Home",
listPath:"/"
},
{
listIcon: <AssignmentInd />,
listText: "Resume",
listPath: "/resume"
},
{
listIcon: <Apps />,
listText: "Portfolio",
listPath: "/portfolio"
},
{
listIcon: <ContactMail />,
listText: "Contacts",
listPath: "/contacts"
}
]



const Navbar = () => {

const [state, setState] = useState ({
  right: false
});

const toggleSlider = ((slider,open) => ()=> {
 setState({...state, [slider]: open});

});

const classes = useStyles()



/* slider is parameter */
const sideList = slider => (
  <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider,false)}>
  <Avatar className={classes.avatar} src={avatar} alt="ASR"/>
  <Divider />
  <List>
  {menuIcons.map((lstItem, key)=>(
  <ListItem button key={key} component={Link} to={lstItem.listPath}>
      <ListItemIcon className={classes.listItem}>{lstItem.listIcon}</ListItemIcon>
      <ListItemText className={classes.listItem} primary={lstItem.listText}/>
  </ListItem>
  ))}
  </List>
  </Box>
);
return(
<>

<Box component="nav">
<AppBar position ="static" style={{background:"#222"}}>
<Toolbar>
    <IconButton onClick={toggleSlider("right",true)}>
    <ArrowBack style={{color:"tomato"}} />
    </IconButton>
    <Typography variant="h5" style={{color:"tan"}} > Protfolio

    </Typography>
<MobilRightMenuSlider
anchor="right"    /* open from the right */
 open = {state.right}
onClose={toggleSlider("right",false)}
 > {sideList("right")}
 <Footer/>
</MobilRightMenuSlider>

</Toolbar>
</AppBar>
</Box>
</>
);
};

export default Navbar;
