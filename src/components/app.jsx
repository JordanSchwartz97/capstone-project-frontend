import React, {useState, useEffect} from 'react'
import LoginPage from './loginpage/loginpage';
import RegisterPage from './registerpage/registerpage'
import {Switch, Route,Redirect} from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from './navbar/navbar';
import aboutPage from './aboutpage/aboutPage';
import ProductsPage from './allproducts/productsPage';
import Homepage from './homepage/homepage';
import ProfilePage from './profile/profilePage';
 const AppHooks = () => {

    let [user, setUser] = useState({});
    let [products, setProducts] = useState([]);

    const jwt = localStorage.getItem('token');
    console.log(jwt)
    let decoded = '';
    
   try{
       decoded = jwt_decode(jwt);
       console.log(decoded)
       
   } catch(ex) {
      console.log(ex); 
   } 
    
       
       
        const getUserData = async () => {
           await axios.get(`http://localhost:5000/api/collections/users/${decoded._id}`)
           .then((value) => {
            setUser(value.data)
           console.log(value.data)
           })
       }

       const getProducts = async () => {
           await axios.get(`http://localhost:5000/api/collections/products`)
           .then((value) => {
            setProducts(value.data)
            console.log(value.data, 'this is products')
           })
       }
       useEffect(() => {
          getUserData()
          getProducts()
          console.log(products,'this is use effect')
       }, [])


   

   

     return(
         <>
            <Switch>
                <Route path = "/" exact component ={LoginPage} />
                <Route path = "/register" component ={RegisterPage}/>
                <Route path = "/home" component= {Homepage}/>
                <Route path ="/products" render={(props) => <ProductsPage {...props} user={user} products ={products}/>}/>
                <Route path ="/about" component={aboutPage}/>
                <Route path ="/profile" render={(props) => <ProfilePage {...props} user={user}/>}/>    
               
                
                <Redirect to ='/'/>
            </Switch>
         </>       
     )
 }

 export default AppHooks