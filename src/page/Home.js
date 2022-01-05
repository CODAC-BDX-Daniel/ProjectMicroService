import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";
import Log from "../components/log";
import Jokes from "../components/Jokes";

const Home = ()=> {
    return (
        <div className="home">
            <Navigation/>
            <Logo/>
            <Log signin={true} signup={false}/>
            <Jokes/>


        </div>
    );
};
export default Home;
