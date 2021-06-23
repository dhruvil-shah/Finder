import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About} from "./components/About";
import {Home} from './components/Home';
import {Login} from './components/Login';
import {Signup} from './components/Signup';
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
    </Switch>
  </BrowserRouter>
   </> 
  );
}

export default App;
