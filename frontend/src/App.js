import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {React,useState,useEffect} from 'react';
import { About} from "./components/About";
import {Home} from './components/Home';
import {Login} from './components/Login';
import {Signup} from './components/Signup';
import {Signout} from './components/Signout';
const App=()=> {
 
  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Switch>
    <Route exact path='/home' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/login' component={Login}></Route>
    <Route exact path='/signup' component={Signup}></Route>
    <Route exact path='/signout' component={Signout}></Route>
    </Switch>
  </BrowserRouter>
   </> 
  );
}

export default App;
