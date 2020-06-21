import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/styles"
import PortfolioHome from './PortfolioHome';
import Footer from './Footer';
import SpacingGrid from './ProductHowItWorks';
import ContactMe from './Form';



const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: "0.3",
  }

})

const Home = () => {
  const classes = useStyles()

  return (<> < Navbar /> <Header />  < Particles canvasClassName = {
    classes.particlesCanva
  }
  params = {{
 particles: {
   number:{
     value:40,
     density: {
       enable: true,
       value_area: 1000
     }
   },
   shape: {
     type:"circle",
     
     strole: {
       width:1,
       
     },
   },
  size: {
    value: 6,
    random: true,
    anim: {
      enable: true,
      speed: 2,
      size_min:0.1,
      sync: true,
    }
  },
  

 }
  }}/>
  <div style={{marginTop:'660px'}}>
  <SpacingGrid/>
    <div style={{marginTop:'10px'}}>
    <PortfolioHome  />
    </div>
  <ContactMe />
 
  </div>
  <div style={{marginTop:'10px'}}>


  <Footer />
  </div>
  
</ >)
}

export default Home;
