import React,{useState,useEffect} from 'react'
import Navbar from '../navbar/navbar'
import news from './download.jpg'
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import './homepage.css';
 const Homepage = () => {

      
    
    return ( 
<div className="home-div">
           <Navbar/>
    <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4"></hr>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>
    <div className="trending">
         
        </div>
    
            
</div>
    )
}
export default Homepage