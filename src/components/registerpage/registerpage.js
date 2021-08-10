import React, { useState,useEffect } from 'react';
import axios from 'axios';

function RegisterPage (props) {

    
    return(
        <div id="login">
            <h3 className="text-center text-white pt-5">Login Form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-form" className="form" action="" method="post">
                            <h3 className="text-center text-info">Register</h3>
                            <div className="form-group">
                                <label for="first-name" className="text-info">First Name:</label>
                                <input type="text" name="first-name" className="form-control" autoComplete="new-first-name"></input>
                            </div>
                            <div className="form-group">
                                <label for="last-name" className="text-info">Last Name:</label>
                                <input type="text" name="last-name" className="form-control" autoComplete="new-last-name"></input>
                            </div>
                            <div className="form-group">
                                <label for="email" className="text-info">Email:</label>
                                <input type="text" name="email" className="form-control" autoComplete="new-email"></input>
                            </div>
                            <div className="form-group">
                                <label for="age" className="text-info">Age:</label>
                                <input type="text" name="age" className="form-control" autoComplete="new-age"></input>
                            </div>
                            <div className="form-group">
                                <label for="username" className="text-info">Username:</label>
                                <input type="text" name="username" className="form-control" autoComplete="new-username"></input>
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-info">Password:</label>
                                <input type="password" name="age" className="form-control" autoComplete="new-password"></input>
                            </div>
                            <div className="form-group">
                                <input type="button" className="leftButton" value="Register" /> 
                            </div>

                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default RegisterPage;