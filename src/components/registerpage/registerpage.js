import React, { useState,useEffect } from 'react';
import axios from 'axios';

function RegisterPage (props) {
const userfirstName = useFormInput('');
const userlastName = useFormInput('');
const useremail = useFormInput('');
const userage = useFormInput('');
const username = useFormInput('');
const userpassword = useFormInput('');
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false)
const [token, setToken] = useState(null);

const register = async() => {
    const newUser = {
        firstName: userfirstName.value,
        lastName: userlastName.value,
        email: useremail.value,
        age: userage.value,
        username: username.value,
        password: userpassword.value}
        console.log(newUser)

    const response = await axios.post('http://localhost:5000/api/collections/register', newUser);

    localStorage.setItem('token', response.headers['x-auth-token']);
    const tokenFromStorage = localStorage.getItem('token');
    setToken(tokenFromStorage);

    if (tokenFromStorage ){
        console.log("history push")
        props.history.push('/home');

        }
        else {
            console.log("failed")
            props.history.push('/login');
        }
}
   
    return(
        <div id="login">
            <h3 className="text-center pt-5">Tech-x Login Form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-form" className="form" action="" method="post">
                            <h3 className="text-center text">Register</h3>
                            <div className="form-group">
                                <label for="first-name" className="text">First Name:</label>
                                <input type="text" {...userfirstName} name="first-name" className="form-control" autoComplete="new-first-name"></input>
                            </div>
                            <div className="form-group">
                                <label for="last-name" className="text">Last Name:</label>
                                <input type="text" {...userlastName} name="last-name" className="form-control" autoComplete="new-last-name"></input>
                            </div>
                            <div className="form-group">
                                <label for="email" className="text">Email:</label>
                                <input type="text" {...useremail} name="email" className="form-control" autoComplete="new-email"></input>
                            </div>
                            <div className="form-group">
                                <label for="age" className="text">Age:</label>
                                <input type="text" {...userage} name="age" className="form-control" autoComplete="new-age"></input>
                            </div>
                            <div className="form-group">
                                <label for="username" className="text">Username:</label>
                                <input type="text"{...username} name="username" className="form-control" autoComplete="new-username"></input>
                            </div>
                            <div className="form-group">
                                <label for="password" className="text">Password:</label>
                                <input type="password" {...userpassword} name="age" className="form-control" autoComplete="new-password"></input>
                            </div>

                            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

                            <div className="form-group">
                                <input type="button" value={loading ? 'Loading...' : 'Register'} className="leftButton" onClick={register} disabled={loading}  /> 
                            </div>

                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }
export default RegisterPage;