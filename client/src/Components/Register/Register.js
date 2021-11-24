import "./Register.css";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

const Register = () => {
    const [newUser, setNewUser] = useState({});

    const handleChange = (e) => {
        /**** set newUser info  *******/
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value.toLowerCase(),
        });
    };

    const history = useHistory();
    /*** Register new user *****/
    const handleSubmit = () => {
        axios
            .post("/api/users/register", newUser)
            .then(() => alert("user registered successfully"))
            .catch((err) => alert(err.response.data.msg));
        history.push("/login");
    };
    return (
        <>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <form className="Register-bg">
                <div class="Register-block">
                    <h1>Register</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        name="userName"
                        id="username"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
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

export default Register;
