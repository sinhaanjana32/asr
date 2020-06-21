import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles( theme=>( {

mainContainer: {
  background: "#233"
},
timeline: {
  position: "relative",
  padding: "1rem",
  margin: "0 auto",
  "&:before":{
    content:"''",
    position:"absolute",
    height: "100%",
    border: "1px solid tan",
    right: "40px",
    top: 0
  } ,
  "&:after":{
    content:"''",
    display: "table",
    clear: "both",
  } ,
  [theme.breakpoints.up("md")]:{
    padding:"2rem",
    "&:before":{
      left: "calc(50% - 1px)",
      right:"auto",
    },
  }
},
timeLineItem:{
  padding: "1rem",
  borderBottom: "2px solid tan",
  position: "relative",
  margin: "1rem 3rem 1rem 1rem",
  clear: "both",
  "&:after": {
    content:"''",
    position:"absolute",
  },
  "&:before": {
    content:"''",
    position:"absolute",
    right: "-0.625rem",
    top: "calc(50% - 5px)",
    borderStyle: "solid",
    borderColor: "tomato tomato transparent transparent",
    borderWidth: "0.635rem",
    transform:"rotate(45deg)",
  },
  [theme.breakpoints.up("md")]: {
    width:"44%",
    margin: "1rem",
    "&:nth-of-type(2n)":{
      float: "right",
      margin: "1rem",
      borderColor:"tan",
    },
    "&:nth-of-type(2n):before":{
      right: "auto",
      left: "-0.625rem",
      borderColor: "transparent transparent tomato tomato",
    },
  }
},

timeLineYear:{
  textAlign: "center",
  maxWidth: "9.375rem",
  margin: "0 3rem 0 auto",
  fontSize: "1.4rem",
  background: "tomato",
  color: "white",
  lineHeight: 1,
  padding: "0.3rem 0 1rem",
  ":before": {
    display:"none"
  },
  [theme.breakpoints.up("md")]: {
    textAlign :"center",
    margin:"0 auto",
    "&:nth-of-type(2n)": {
      float:"none",
      margin:"0 auto"
    },
      "&:nth-of-type(2n):before":{
        display: "none",
      }
  },
},

heading: {
  color: "tomato",
  padding: "3rem 0",
  textTransform: "uppercase"
},

subHeading:{
   color: "white",
   padding: "0",
   textTransform: "uppercase",
},



}));


const Resume = ()=> {
  const classes = useStyles();

return (
  <>

<Navbar />

<Box component="header" className={classes.mainContainer}>
<Typography variant="h4" align="center" className={classes.heading}>
Working Experience
</Typography>

<Box component="div" className={classes.timeline}>
<Typography  variant="h2"
className= {`${classes.timeLineYear} ${classes.timeLineItem}`}
> 2019-2020</Typography>  

<Box component="div" className={classes.timeLineItem}>
<Typography variant="h5" align="center" className={classes.subHeading}>
FronEnd Development | WordPress Developer
</Typography>
<Typography variant="body1" align="center" style={{color:"tomato"}}>
Freelance
</Typography>
<Typography variant="subtitle1" align="center"  style={{color:"tan"}}>
React | JS | API | Node | Express | MUI | WIX | WordPress
</Typography>
</Box>

<Typography  variant="h2"
className= {`${classes.timeLineYear} ${classes.timeLineItem}`}
> 2018-2019</Typography>

<Box component="div" className={classes.timeLineItem}>
<Typography variant="h5" align="center" className={classes.subHeading}>
Founder
</Typography>
<Typography variant="body1" align="center" style={{color:"tomato"}}>
Beyond Border Oy
</Typography>
<Typography variant="subtitle1" align="center"  style={{color:"tan"}}>
www.beyondborder.net
Ran semi-failed startup.
</Typography>
</Box>

<Typography  variant="h2"
className= {`${classes.timeLineYear} ${classes.timeLineItem}`}
> 2016-2018</Typography>

<Box component="div" className={classes.timeLineItem}>
<Typography variant="h5" align="center" className={classes.subHeading}>
Integration in Finland
</Typography>
<Typography variant="body1" align="center" style={{color:"tomato"}}>
LUKSIA | GOInternational Finland | Finbolly Oy
</Typography>
<Typography variant="subtitle1" align="center"  style={{color:"tan"}}>
Finnish Language, Work Practice and SoMe Marketing
</Typography>
</Box>

<Typography  variant="h2"
className= {`${classes.timeLineYear} ${classes.timeLineItem}`}
> 2013-2015</Typography>

<Box component="div" className={classes.timeLineItem}>
<Typography variant="h5" align="center" className={classes.subHeading}>
Technical PMO
</Typography>
<Typography variant="body1" align="center" style={{color:"tomato"}}>
IBM INDIA
</Typography>
<Typography variant="subtitle1" align="center"  style={{color:"tan"}}>
Handelled commercial and delivery aspects of project delivery cycle starting from Project initiation to Project closure for clients like BP and BAT
</Typography>
</Box>

<Typography  variant="h2"
className= {`${classes.timeLineYear} ${classes.timeLineItem}`}
> 2010-2012</Typography>

<Box component="div" className={classes.timeLineItem}>
<Typography variant="h5" align="center" className={classes.subHeading}>
Technical Support Associate
</Typography>
<Typography variant="body1" align="center" style={{color:"tomato"}}>
iYogi Technical Services
</Typography>
<Typography variant="subtitle1" align="center"  style={{color:"tan"}}>
Resolving system's technical issues.
</Typography>
</Box>

<Typography  variant="h2"
className= {`${classes.timeLineYear} ${classes.timeLineItem}`}
> 2010</Typography>

<Box component="div" className={classes.timeLineItem}>
<Typography variant="h5" align="center" className={classes.subHeading}>
Computer Engineering
</Typography>
<Typography variant="body1" align="center" style={{color:"tomato"}}>
MIT Pune
</Typography>
<Typography variant="subtitle1" align="center"  style={{color:"tan"}}>
Information Technology
</Typography>




</Box>
</Box>
</Box>
</>

);
}

export default Resume;
