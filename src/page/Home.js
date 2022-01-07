import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";
import Log from "../components/log";
import Jokes from "../components/Jokes";

import Weathers from "../components/Weather/Weathers";
import { useEffect } from "react";

import React from "react";
import Youtubeconnection from "../components/Youtubeconnection";
import {NavLink} from "react-router-dom";


const Home = ()=> {


    // useEffect(() => {
    //         console.log("test");
    //     }, [])
    const isLoading=localStorage.getItem("isLoading");
    return (
        <div className="home">

            <Navigation/>

            {/* <Log signin={true} signup={false}/> */}
           {isLoading ?
           <div className="widgets">
               <Youtubeconnection/>
                <Jokes/>
                <Weathers/>

            </div> :
               <NavLink exact to="/Profil" className="profil-page">
                   <button className="btn-validation">Veuillez vous connectez ou inscrivez vous !!!</button>
               </NavLink>}






        </div>
    );
};
export default Home;
