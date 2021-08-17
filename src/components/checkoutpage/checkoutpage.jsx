import React, {useState} from "react";
import "./checkoutpage.css"
import HandlePayment from "../handlepayment/HandlePayment";
import Navbar from "../navbar/navbar";

export default function CheckoutPage() {
    const [checkout, setCheckout] = useState(false);


    return (
        <div>
            <Navbar/>
            
            <div className="checkout-container">
                <div className="paypal-button">
                    <HandlePayment />   
                </div>
                
               
                
            </div> 
        </div>
    )
}
