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
                
                {checkout ? (
                <HandlePayment />
                ) : (
                <button onClick={() =>{
                setCheckout(true);
                }}
                ></button>
                )}
            </div> 
        </div>
    )
}
