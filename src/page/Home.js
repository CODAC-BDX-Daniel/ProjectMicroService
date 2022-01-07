import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";
import Log from "../components/log";
import Jokes from "../components/Jokes";

import Weathers from "../components/Weather/Weathers";
import { useEffect } from "react";

import React from "react";


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
             
                <Jokes/>
                <Weathers/>
            </div> : 
            <h2>Not connected</h2>}
            
            


         

        </div>
    );
};
export default Home;
