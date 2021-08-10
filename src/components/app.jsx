import React, {useState, useEffect} from 'react'
import LoginPage from './loginpage/loginpage';
import {Switch, Route,Redirect} from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
 const AppHooks = () => {

    let [user, setUser] = useState({});
  
    const jwt = localStorage.getItem('token');
    let decoded = '';
   try{
       decoded = jwt_decode(jwt);
       
   } catch(ex) {
      console.log(ex); 
   } 
   

    const getUserData = async () => {
       await axios.get(`http://localhost:5000/api/collections/user/${decoded._id}`)
       .then((value) => {
       setUser(value.data)
       console.log(value.data)
       })
   }

   

   
   
   useEffect(() => {
       getUserData()
       console.log(user)
   },[])
   

   

     return(
         <div className="body">
            <Switch>
                <Route path = "/" exact component ={LoginPage} />
            </Switch>
        
         </div>
         
     )
 }

 export default AppHooks