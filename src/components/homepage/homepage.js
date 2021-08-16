import React,{useState,useEffect} from 'react'
import Navbar from '../navbar/navbar'
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import './homepage.css';
 const Homepage = () => {

      
    
    return ( 
        <>
        <Navbar/>
        
    <div className="p-5 text-center bg-image ">
  <div classsName="mask">
    <div className="d-flex justify-content-center align-items-center h-100">
      <div classsName="text-white">
        <h1 classsName="jumbotron-text">Tech-x sells the latest and greatest tech products currently on the market. Tech-x selects only the greatest products designed to make your life easier.</h1>
        <h4 classsName="jumbotron-text">Use code 20OFF for 20% off your for</h4>
        <a classsName="btn btn-outline-light btn-lg" href="/products" role="button">View Products</a>
      </div>
    </div>
  </div>
</div>
         
        
    
            
        </>
    )
}
export default Homepage