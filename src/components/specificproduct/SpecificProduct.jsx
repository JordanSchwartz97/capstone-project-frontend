import React, {useEffect, useState} from 'react';
import keyboard from './download.jpg';
import './SpecificProduct.css'
import Navbar from '../navbar/navbar';
import {BsFillStarFill} from "react-icons/bs"
import {BsStar} from "react-icons/bs"
import Reviews from '../allproducts/reviews/Reviews';
import Cart from '../cart/Cart'

export default function SpecificProduct({product}) {
    console.log(product)
    return (
        <>
        {/* {props.product.productReview.map(review => {
            <Reviews rating={review.rating} text={review.text}/>
        })}
        <Reviews rating="5" text="test" /> */}
        <Cart/>
        <div className="sp-container">
            <a href="/products">Back to Products.</a>
            <div className="sp-card">
                <div className="sp-container-fluid">
                    <div className="wrapper-row">
                        <div className="preview col-md-6">
                            <div className="preview-pic">
                                    <img className="product-image" src={keyboard}></img>
                            </div>
                            <div className="details ">
                                <h3 className="product-name">{product.productName}</h3>
                            <div className="rating">
                                <div className="stars">
                                    <span className="star"><BsFillStarFill/></span>
                                    <span className="star"><BsFillStarFill/></span>
                                    <span className="star"><BsFillStarFill/></span>
                                    <span className="star"><BsFillStarFill/></span>
                                    <span className="star"><BsStar/></span>
                                </div>
                                <span className="review-no">{product.productReview.length} reviews</span>
                            </div>
                            <p className="product-description">{product.productDescription}</p>
                            <h4 className="product-price"><span>Current Price: {product.productPrice}</span></h4>
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
