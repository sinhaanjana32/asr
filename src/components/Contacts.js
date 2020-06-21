import React, {useState} from 'react'
import  {makeStyles, withStyles} from '@material-ui/core/styles'
import  {TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from "@material-ui/icons/Send"
import TextForm from "./TextForm"
import axios from 'axios';





const useStyles = makeStyles(theme => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },

button : {
  marginTop: "1rem",
  color:"tomato",
  borderColor: "tomato"
},
}))

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color:"tomato",
    },
    "& label":{
      color: "tan",
    },
    "& .MuiOutLinedInput-root":{
      borderColor:"tan",
    },
    "&:hover fieldset": {
      borderColor:"tan",
    },
    "&.Mui-focused fieldset":{
      borderColor: "tan",
    },
  },
})(TextField);


const Contacts = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  
  
  
  
  
  const handleSubmit = (e) =>{
    e.preventDefault();
  
    let data = { 
      name: name, 
      email: email,
      comname:companyName,
    }
    axios.post('/api/forms', data)
    .then(res=> {
     alert('messege sent');
      
    })
    .catch((err)=>{
    console.log('message not sent');
    })
    console.log(data);
  }

const classes = useStyles()

return (


<Box component="div" style={{background:"#233",height:"100vh"}}>

<TextForm />

<Grid container justify="center">
<Box component="form" className={classes.form}>
 <Typography variant="h5"  style={{color:"tomato", textAlign:"center", textTransform:"uppercase"}}>
   Hire or Contact me...</Typography>
 <InputField
fullWidth={true}
label="Name"
variant="outlined"
margin="dense" size="medium"
inputProps={{style:{color: "white"}}}
value={name}
onChange={(e)=> {setName(e.target.value)}} />

<br />
 <InputField
fullWidth={true}
label="Email"
variant="outlined"
inputProps={{style:{color: "white"}}}
margin="dense" size="medium"
value={email}
onChange={(e)=> {setEmail(e.target.value)}}
 />
<br />
 <InputField
fullWidth={true}
label="Company Name"
variant="outlined"
inputProps={{style:{color: "white"}}}
margin="dense" size="medium"
value={companyName}
onChange={(e)=> {setCompanyName(e.target.value)}}
 />
<br />


<Button type="button" className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />} onClick={handleSubmit}>
Contact Me
</Button>

</Box>
</Grid>
</Box>

)
}

export default Contacts;
