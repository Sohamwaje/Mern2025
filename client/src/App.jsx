import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
import {Contact} from "./Pages/Contact";
import {Service} from "./Pages/Service";
import {Register} from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Navbar } from "./components/Navbar";
import {Repair} from "./Pages/Repair";
import {Inward} from "./Pages/Inward";
import {Outward} from "./Pages/Outward";
import {RepView} from "./Pages/Repairview";
import { Options } from "./Pages/Options";
import { Inlist } from "./Pages/Inlist";
import { Outlist } from "./Pages/Outlist";


const App = ()=>{
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/home" element = {<Home/>}/>
  <Route path="/about" element = {<About/>}/>
  <Route path="/contact" element = {<Contact/>}/>
  <Route path="/service" element = {<Service/>}/>
  <Route path="/register" element = {<Register/>}/>
  <Route path="/" element = {<Login/>}/> 
  <Route path="/repair" element = {<Repair/>}/> 
  <Route path="/options" element = {<Options/>}/>
  <Route path="/inward" element = {<Inward/>}/>
  <Route path="/outward" element = {<Outward/>}/>
  <Route path="/allrep" element = {<RepView/>}/>
  <Route path="/inlist" element = {<Inlist/>}/>
<Route path="/outlist" element = {<Outlist/>}/>




</Routes>
</BrowserRouter>
</>
 );
};

export default App;