import "./Login.css";
import axios from "axios";
import React, { useState } from "react";
import { login } from "../../utils";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value.toLowerCase(),
        });
    };

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("api/users/login", loginData)
            .then((response) => {
                login(response.data.token);
                history.push("/selectquiz");
                history.go(0);
            })
            .catch((err) => alert(err.response.data.msg));
    };
    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <form className="Login-bg">
                <div class="login-block">
                    <h1>Login</h1>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </>
    );
};

export default Login;
