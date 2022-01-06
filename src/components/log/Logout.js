import React from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const Logout = () => {

const ButtonLogout = () => {
        Cookies.remove('access_token');
        window.location.reload(false)
    }
    return <div className="logoutNavigation">

        <div onClick={ButtonLogout} activeClassName="logout-nav-active">Logout</div>

    </div>
}

export default Logout;
