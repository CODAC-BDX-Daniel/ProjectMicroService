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
            {Token ? <div></div>:<NavLink exact to="/Profil" activeClassName="nav-active">
                Profil
            </NavLink>}

            <NavLink exact to="/About" activeClassName="nav-active">
          About
            </NavLink>
            {Token ? <div className="btn_logout"><button className="btn-validation"><Logout/></button></div>:""}
        </div>
    );
};

export default Navigation;
