import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Appbar from './Components/Layout/Appbar'
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'




function App() {


  return (
    <BrowserRouter>
    <Appbar></Appbar>

    <Switch>
    <Route exact path="/">{Home}</Route>
    <Route exact path="/contact">{Contact}</Route>
    <Route exact path="/about">{About}</Route>

    </Switch>

    
    </BrowserRouter>
  );
}

export default App;
