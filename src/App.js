import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import About from "./page/About";
import User from "./page/User";
import Profil from "./page/Profil";
import Admin from "./page/Admin";

const App = () => {
    return (
             <BrowserRouter>
                 <Switch>
                     <Route path="/" exact component={Home}/>
                     <Route path="/Profil" exact component={Profil}/>
                     <Route path="/User" exact component={User}/>
                     <Route path="/Admin" exact component={Admin}/>
                     <Route path="/About" exact component={About}/>
                     <Route component={NotFound}/>
                 </Switch>
             </BrowserRouter>
    );
};

export default App;
