import React from 'react'
import Navbar from '../navbar/navbar'
import EmailUser from '../emailuser/EmailUser'
import './PaymentSuccessful.css'

export default function PaymentSuccessful(props) {
    return (
        <>
        <Navbar/>
        <EmailUser user={props.user}/>
        <div className="payment-successful-container">
            <h1 className="payment-title-body">Payment was Successful</h1>
            <div className="payment-successful-body">
                <h5>Your payment has been completed. Please check your email for order details.</h5>
                <a href="/home" className="btn card-btn payment-successful-btn btn-primary">Home</a>
                <a href="/home" className="btn card-btn payment-successful-btn btn-primary">Reciept</a>
            </div>
        </div>
        </>
    )
}
