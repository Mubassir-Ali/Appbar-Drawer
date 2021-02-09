import React from 'react'
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom'
import Appbar from './Components/Layout/Appbar'
import Coffee from './Components/Pages/Coffee'
import Dessert from './Components/Pages/Dessert'
import Healthy from './Components/Pages/Healthy'
import Meat from './Components/Pages/Meat'
import Pizza from './Components/Pages/Pizza'
import Errors from './Components/Pages/Error'


function App() {

  return (
  
    <BrowserRouter >
    <Appbar/>      

    <Switch>  
    <Route exact path="/">{Coffee}</Route>
    <Route exact path="/desert">{Dessert}</Route>
    <Route exact path="/healthy">{Healthy}</Route>
    <Route exact path="/meat">{Meat}</Route>
    <Route exact path="/pizza">{Pizza}</Route>
    <Route path="*" render={()=><Errors/>} />
    
    </Switch>    
    </BrowserRouter>

 
    
  );
}

export default App;
