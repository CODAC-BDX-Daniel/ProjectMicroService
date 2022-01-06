import React, {useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import Log from "../components/log";
import Logout from "../components/log/Logout";
import Cookies from "js-cookie";

const Token = Cookies.get('access_token')

const Profil = () => {

        Cookies.get('access_token')


    return (
        <div>
            <Navigation/>
        <div className="profil-page">
            {Token ? <h1><Logout/></h1> : (
            <div className="log-container">
                <Log signin={false} signup={true}/>

            </div>
            )}
        </div>
        </div>
    );
};

export default Profil;
