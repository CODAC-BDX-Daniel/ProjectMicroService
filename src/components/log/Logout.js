import React from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const Logout = () => {
    const removeCookie = (key) => {
        if (window !== "undefined") {
            Cookies.remove('access_token');
        }
    };


    return (
        <button onClick={Logout}/>


    );
};

export default Logout;
