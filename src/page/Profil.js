import React from 'react';
import Navigation from "../components/Navigation";
import Log from "../components/log";

const Profil = () => {
    return (
        <div>
            <Navigation/>
        <div className="profil-page">
            <div className="log-container">
                <Log signin={false} signup={true}/>
            </div>
        </div>
            <img src="./img/log.svg" alt="img-log"/>
        </div>
    );
};

export default Profil;
