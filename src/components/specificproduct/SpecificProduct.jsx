import React, {useEffect, useState} from 'react';
import './SpecificProduct.css'
import Navbar from '../navbar/navbar';
import {BsFillStarFill} from "react-icons/bs"
import {BsStar} from "react-icons/bs"
import Reviews from '../allproducts/reviews/Reviews';
import tech from './tech-x.png';
import axios from 'axios';

export default function SpecificProduct({product, total,user}) {
    const usertext = useFormInput('');
    const userrating = useFormInput('');
    const usertitle = useFormInput('');
    
    const addReview = async(product_id) => {
         const review = { text: usertext.value,
                         rating: userrating.value,
                         title: usertitle.value}
        console.log(review)
       const response = await axios.put(`http://localhost:5000/api/collections/products/reviews/${product_id}`, review)
       console.log(response)
       alert('Your review has been submitted!')
   }
    
    const addToCart = async(name_id) => { 
        console.log(name_id)
       const response = await axios.post(`http://localhost:5000/api/collections/cart/${user._id}/${name_id}`)
       console.log(response.data)
       alert("Item has been added to your cart!")
       total = total + response.data.productPrice
       console.log(total)
   }
   
    return (
        <>
            <form className="review-form">
                <h5 classname="review-header">Add A review!</h5>
                <div className="form-group review-title">
                    <label for="review-title">Title: Please enter a title for your review.</label>
                    <input className="title-input-box" type="text" {...usertitle} name="title" autoComplete="review-title"></input>
                </div>
                <div className="form-group input-review">                    
                    <label for="rating">Rating: Please enter a value from 1-5 stars.</label>
                    <input type="text" {...userrating} name="rating" autoComplete="new-rating"></input>  
                </div>
                <div className="form-group review-text">
                    <label for="review-text">Text:</label>
                    <textarea type="text" {...usertext} className="text-area-review-box" name="review-text" autoComplete="review-text"></textarea>
                </div> 
                <a className="btn card-btn submit-review-btn btn-primary" onClick={() => addReview(product._id)}>Submit Review</a>
            </form>
            
        {/* {product.productReview.map(review => (
            <Reviews rating={review.rating} text={review.text}/>
        ))} */}
        <Reviews product={product}/>
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
                                <h3 className="product-name">{product.productName} - ${product.productPrice}</h3>
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
                            
                            <div className="action">
                            <a href="#" className="btn card-btn individual-add-to-cart-btn btn-primary " onClick={() => addToCart(product._id)}>Add to cart</a>
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
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }