import React, {useState, useEffect} from 'react';
import LoginPage from './loginpage/loginpage';
import {Switch, Route,Redirect} from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const App = () => {

    let [user, setUser] = useState({});

    const jwt = localStorage.getItem('token');
    let decoded = '';
    console.log(jwt)
    try {
        decoded = jwt_decode(jwt);
    } catch(ex) {
        console.log(ex);
    }
    const getUserData = async () => {
        await axios.get(`http://localhost:5000/api/collections/user/${decoded._id}`)
    }

    return(
        <>
        <Switch>
        <Route path = '/' exact component = {LoginPage}/>
        
        </Switch>
        </>
    )
}


export default App;
