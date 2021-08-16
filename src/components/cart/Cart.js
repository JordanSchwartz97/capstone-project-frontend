import React from 'react'
import Plus from "./plus.png"
import Minus from "./minus.png"
import './Cart.css'


export default function Cart(props) {
    console.log(props)
    

    return (
        <div className="shopping-cart">
            <div className="title">
                <div className="item">
                    <div className="buttons">
                        <span className="delete-btn"></span>
                    </div>
                    <div className="image">
                        <img src="" alt="placeholder product text."></img>
                    </div>
                    <div className="product-name">
                        <span>Product Name Here</span>
                    </div>
                    <div className="product-description">
                        <span>Product Description Here</span>
                    </div>
                    <div className="product-price">
                        <span>Product Price Here</span>
                    </div>
                    <div className="quantity">
                        <span>Quantity:</span>
                        <button className="" type="button" name="button">
                            <img className="minus-btn" src={Minus} alt="minus"></img>  
                        </button>
                        <input type="text" name="name" value="1"></input>
                        <button className="" type="button" name="button">
                            <img className="plus-btn" src={Plus} alt="Add"></img>
                        </button>
                    </div>
                    <div className="total-price">Total: $549</div>
                    <a href="#" className="btn card-btn btn-primary" >Checkout</a>
                </div>
            </div>
        </div>
    )
}
