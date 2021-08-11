import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import logo from './tech-x.png'
import './navbar.css';

const Navbar = (props) => {
    function logout () {
        localStorage.clear();
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark ">
         <img className="logo" src={logo}></img>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>  
         </button>
         <div className="" id="navbarNavAltMarkup">
             <div className="navbar-nav">
                 <Link to = "/home">
                 <a className="nav-item nav-link active" href="/home">Home</a>
                 </Link>
                 <Link to = "/products">
                 <a className="nav-item nav-link" href="/products">Products</a>
                 </Link>
                 <Link to = "/about">
                 </Link>
                 <a className="nav-item nav-link" href="/about">About Tech-x</a>   
            </div>
        </div>
        <div className="navbar-right">
                
                 <Link to = "/profile">
                 <a className="nav-item nav-bar-right" href="/profile">Profile</a>
                 </Link>
                 <a className="nav-item nav-bar-right" href="/" onClick={logout}>Logout</a>
        </div>
        </nav>
    )
}
export default Navbar