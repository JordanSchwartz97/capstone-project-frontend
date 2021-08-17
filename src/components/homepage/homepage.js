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
  <div className="mask">
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 id="jumbotrontext" className="jumbotron-text">Tech-x sells the latest and greatest tech products currently on the market. Tech-x selects only the greatest products designed to make your life easier.</h1>
        <h4 id="jumbotrontext" className="jumbotron-text">Use code 20OFF for 20% off your first order.</h4>
        <button type="button" className="btn btn-primary " href="/products" >View Products</button>
      </div>
    </div>
  </div>
</div>
         
        
    
            
        </>
    )
}
export default Homepage