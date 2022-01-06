import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";
import Log from "../components/log";
import Jokes from "../components/Jokes";
import Logout from "../components/log/Logout";
import React from "react";
import Cookies from "js-cookie";

const Token = Cookies.get('access_token')

const Home = ()=> {
    return (
        <div className="home">
            <Logo/>
            <br/>
            <Navigation/>
            {Token ? <div>

                <Jokes/>

            </div> : (
            <div>
            <Log signin={true} signup={false}/>
                <br/>

            </div>)}

        </div>
    );
};
export default Home;
