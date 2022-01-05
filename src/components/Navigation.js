import React from 'react';
import { NavLink} from "react-router-dom";

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
        </div>
    );
};

export default Navigation;
