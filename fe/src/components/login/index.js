import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { matchPath } from "react-router";


const Login = ({ isLogin, setIsLogin }) => {
    const [userSubmit, setUserSubmit] = useState({
        name: '',
        pass: ''
    })
    const match = matchPath("/login", {
        path: "/login?error=Incorrect_Credential",
        exact: true,
        strict: true
    });
    console.log(match)

    useEffect(() => {
        // if(match)
    }, [])
    return (
        // <Redirect to="/home"/>
        <div style={{ width: 50 + "%" }} className="mx-auto">
            <h1>Login</h1>
            <form action="http://localhost:5000/login" method="POST">
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        id="email"
                        // onChange={nameSubmit}
                        name="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        id="pwd"
                        // onChange={passSubmit}
                        name="pass"
                    />
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input
                            className="form-check-input" type="checkbox" /> Remember me
                            </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};
export default Login;