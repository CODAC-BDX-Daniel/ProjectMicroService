import React, {useState} from "react";
import axios from "axios";
import Cookies from 'js-cookie'


const SignInForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/login', {
            username,
            password
        })
            .then((res) => {
                    Cookies.set('access_token',res.data.access_token);
                    localStorage.setItem("Joke", JSON.stringify(res.data.Joke));
                    localStorage.setItem("Weathers", JSON.stringify(res.data.Weathers));
                    localStorage.setItem("Youtube", JSON.stringify(res.data.Youtube.items));
                    localStorage.setItem("isLoading", true);

                    window.location = "/";
            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (
        <form onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor="username">Pseudo</label>
            <br/>
            <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <div className="username error"></div>
            <br/>
            <label htmlFor="password">Mot de passe</label>
            <br/>
            <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <br/>
            <button className="btn-validation" type="submit">Se connecter</button>
        </form>
    );
};

export default SignInForm;
