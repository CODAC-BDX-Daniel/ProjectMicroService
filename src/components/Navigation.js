import React from 'react';
import { NavLink} from "react-router-dom";
import Logout from "./log/Logout";
import Cookies from "js-cookie";
const Token = Cookies.get('access_token')

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
          Accueil
            </NavLink>
            <NavLink exact to="/Profil" activeClassName="nav-active">
                Profil
            </NavLink>
            <NavLink exact to="/User" activeClassName="nav-active">
                User
            </NavLink>
            <NavLink exact to="/Admin" activeClassName="nav-active">
                Admin
            </NavLink>
            <NavLink exact to="/About" activeClassName="nav-active">
          About
            </NavLink>
            {Token ? <div><Logout/></div>:""}
        </div>
    );
};

export default Navigation;
