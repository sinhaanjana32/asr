import React from 'react';
import {Route} from 'react-router-dom'
import Home from './components/';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

import TextForm from "./components/TextForm";

import './App.css';


function App() {
  return (
    <>
    <CssBaseline />
  <Route exact path="/" component={Home} />
  <Route path="/resume" component={Resume} />
<Route path="/portfolio" component={Portfolio} />
<Route path="/contactme" component={TextForm} />


</>

  );
}

export default App;
