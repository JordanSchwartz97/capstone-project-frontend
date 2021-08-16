import React, {useEffect, useState} from 'react';
import keyboard from './download.jpg';
import './SpecificProduct.css'
import Navbar from '../navbar/navbar';
import {BsFillStarFill} from "react-icons/bs"
import Reviews from '../allproducts/reviews/Reviews';
export default function SpecificProduct(props) {
    return (
        <>
        <Navbar/>
        <Reviews/>
        <div className="sp-container">
            <div className="sp-card">
                <div className="sp-container-fluid">
                    <div className="wrapper-row">
                        <div className="preview col-md-6">
                            <div className="preview-pic">
                                    <img className="product-image" src={keyboard}></img>
                            </div>
                            <div className="details ">
                                <h3 className="product-name">placeholder product name</h3>
                            <div className="rating">
                                <div className="stars">
                                    <span className="star"><BsFillStarFill/></span>
                                    <span className="star"><BsFillStarFill/></span>
                                    <span className="star"><BsFillStarFill/></span>
                                    <span className="star"><BsFillStarFill/></span>
                                    <span className="star"><BsFillStarFill/></span>
                                </div>
                                <span className="review-no">41 reviews</span>
                            </div>
                            <p className="product-description">Placeholder product description</p>
                            <h4 className="product-price"><span>Current Price: $4.99</span></h4>
                            <div className="action">
                            <a href="#" className="btn card-btn individual-add-to-cart-btn btn-primary " onClick="">Add to cart</a>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        </>
    )
}
