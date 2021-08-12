import axios from 'axios'
import React from 'react'
import Navbar from '../navbar/navbar'
import './productsPage.css'
export default function ProductsPage(props) {
    console.log(props.products)
    console.log(props.user)
    const addToCart = async() => {
    const response = await axios.post(`http://localhost:5000/api/collections/cart/${props.user._id}/${this.name._id}`)
    }
    return (
        <>
            <Navbar/>
            <div className="products-container">
            {props.products ?
            props.products.map((name) => (
                <div class="card"> 
                    <div class="card-body">
                    <img class="card-img-top" src={name.productImage} alt="Card image cap"></img>
                        <h5 class="card-title">{name.productName} ${name.productPrice}</h5>
                        <p class="card-text">{name.productDescription}</p>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            ))
            : <h5>No Products</h5>
            } 
            </div>
        </>
    )
}
