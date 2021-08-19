import React from 'react';
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM});



export default function HandlePayment(props) {
    console.log(props,'this is handlepayment props')
    const orderDetails = async() => {
        
    }
    const createOrder= (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "5.00",
                    },
                },
            ],
        });
    };
    const onApprove = (data,actions) => {
        return actions.order.capture();
    }
    return (
        <>
            <PayPalButton 
            
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            />
        </>
        
    );
}
