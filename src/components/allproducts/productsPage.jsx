import axios from 'axios'
import Navbar from '../navbar/navbar'
import './productsPage.css'
import productImage from './download.jpg'
import Cart from '../cart/Cart'
import React,{useState,useEffect} from 'react'
import SpecificProduct from '../specificproduct/SpecificProduct'

export default function ProductsPage(props) {
    let [activeProduct, SetActiveProduct] = useState({});
    let [isActive, SetIsActive] = useState(false);
    let [total, setTotal] = useState(0)
    
    const addToCart = async(name_id) => { 
        const response = await axios.post(`http://localhost:5000/api/collections/cart/${props.user._id}/${name_id}`)
        alert("Item has been added to your cart!")
        console.log(response)
        setTotal(total + response.data.productPrice)
        console.log(total)
    }
    
    const specificProductInfo = (name) => {
        SetActiveProduct(name)
        SetIsActive(true);
    }
    return (
        <>
            <Navbar/>
                {isActive ? <SpecificProduct product={activeProduct} user={props.user}/> 
                :  
                <>
             {props.user ? <Cart user={props.user} products={props.products}/> : <div>No items in cart!</div>}
            <div className="products-container">
                {props.products ?
                props.products.map((name) => (
                    <div class="card"> 
                        <div className="card-body">
                            <h5 className="card-title">{name.productName} ${name.productPrice}</h5>
                            <p className="card-text">{name.productDescription}
                            <button href="/moreinfo" className="btn info-button btn-link" onClick={() => specificProductInfo(name)} >More Info</button>
                            </p>
                            <button href="" className="btn card-btn add-to-cart-btn btn-primary" onClick={() => addToCart(name._id)}>Add to cart</button>  
                        </div>
                    </div>
                ))
                : <h5>No Products</h5>
                } 
               
                </div>
                </>
            }
        </>
    )
}
