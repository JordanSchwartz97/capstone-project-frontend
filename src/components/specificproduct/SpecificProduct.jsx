import React, {useEffect, useState} from 'react';
import './SpecificProduct.css'
import Navbar from '../navbar/navbar';
import {BsFillStarFill} from "react-icons/bs"
import {BsStar} from "react-icons/bs"
import Reviews from '../allproducts/reviews/Reviews';
import tech from './tech-x.png';

export default function SpecificProduct({product}) {
    console.log(product)
    return (
        <>
            <form className="review-form">
                <div className="form-group ">
                <label for="exampleFormControlSelect1">Rating</label>
                <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div className="form-group review-text">
                <label for="exampleFormControlTextarea1">Review Text</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            </form>

        {product.productReview.map(review => (
            <Reviews rating={review.rating} text={review.text}/>
        ))}
        <div className="sp-container">
            <a href="/products">Back to Products.</a>
            <div className="sp-card">
                <div className="sp-container-fluid">
                    <div className="wrapper-row">
                        <div className="preview col-md-6">
                            <div className="preview-pic">
                                    <img className="product-image" src={tech}></img>
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
                            <h4 className="product-price"><span>Current Price: ${product.productPrice}</span></h4>
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
