import React, { useState} from 'react';
import axios from "axios";

const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        const usernameError = document.querySelector('.username.error');
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');

        axios({
            method: "post",
            url: 'http://localhost:8080/users',
            withCredentials: true,
            data: {
                username: username,
                email: email,
                password: password,
            },
        })
            .then((res) => {
        if (res.data.errors){
            usernameError.innerHTML =res.data.error.username;
            emailError.innerHTML =res.data.error.email;
            passwordError.innerHTML =res.data.error.password;
        } else {
            window.location = '/';
        }
        })
            .catch((err)=> {
                console.log(err)
            })
    };
    return (
        <form action="" onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor="username">Pseudo</label>
            <br/>
            <input type="test" name="username" id="username"
                   onChange={(e) => setUsername
                   (e.target.value)} value={username}/>
            <div className="username error"></div>
            <br/>
            <label htmlFor="email">Email</label>
            <br/>
            <input type="test" name="email" id="email"
                   onChange={(e) => setEmail
            (e.target.value)} value={email}/>
            <div className="email error"></div>
            <br/>
            <label htmlFor="password">Mot de passe</label>
            <br/>
            <input type="password" name="password" id="password"
            onChange={(e) => setPassword
            (e.target.value)} value={password}/>
            <br/>
            <div className="password error"></div>
            <input type="submit" value="Se connecter"/>
        </form>
    );
};

export default SignInForm;
