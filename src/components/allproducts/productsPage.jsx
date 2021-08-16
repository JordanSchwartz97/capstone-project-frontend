import axios from 'axios'
import React from 'react'
import Navbar from '../navbar/navbar'
import './productsPage.css'
import productImage from './download.jpg'
import Cart from '../cart/Cart'
export default function ProductsPage(props) {
    console.log(props.products)
    console.log(props.user)
    
    const addToCart = async(name_id) => {
        const response = await axios.post(`http://localhost:5000/api/collections/cart/${props.user._id}/${name_id}`)
    }
    return (
        <>
            <Navbar/>
            <Cart/>
            <div className="products-container">
            {props.products ?
            props.products.map((name) => (
                <div class="card"> 
                    <div className="card-body">
                        <h5 className="card-title">{name.productName} ${name.productPrice}</h5>
                        <img className="card-img-top" src="" alt="Card image cap"></img>
                        <p className="card-text">{name.productDescription}
                        <a href="" className="btn info-button btn-link" >More Info</a>
                        </p>
                        <a href="#" className="btn card-btn add-to-cart-btn btn-primary" onClick={() => addToCart(name._id)}>Add to cart</a>
                        
                    </div>
                </div>
            ))
            : <h5>No Products</h5>
            } 
            </div>
        </>
    )
}
