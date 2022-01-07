import Navigation from "../components/Navigation";
// import Logo from "../components/Logo";
// import Countries from "../components/Countries";
// import Log from "../components/log";
import Jokes from "../components/Jokes";
import Weathers from "../components/Weather/Weathers";
import {useEffect, useState} from "react";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import Weather from "../components/Weather/Wheather";

import React from "react";
import weathers from "../components/Weather/Weathers";

import Youtubeconnection from "../components/Youtubeconnection";
import {NavLink} from "react-router-dom";

import Youtube from "../components/Youtube/Youtube";



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
<
               <Youtubeconnection/>
                <Jokes/>
                <Weathers/>
               <Youtube/>

            </div> :

               <NavLink exact to="/Profil" className="profil-page">
                   <button className="btn-validation">Veuillez vous connectez ou inscrivez vous !!!</button>
               </NavLink>}







        </div>
    );
};
export default Home;
