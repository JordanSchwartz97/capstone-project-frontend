import React from 'react'
import Navbar from '../navbar/navbar'
import "./CouponPage.css"

export default function CouponPage() {
    return (
        <>
        <Navbar/>
            <div className="coupon-container">
                <div className="coupon-container-title">
                    <h3>Currently Active Coupons</h3>
                </div>
                <div className="coupon-container-body ">
                    <p>20OFF: Use code "20OFF" at checkout to recieve 20% off your first purchase.</p>
                    <p>FREESHIP: Use code "FREESHIP" at checkout to recieve freeshipping for your first order.</p>
                    <p>FREEDAY: Use code "FREEDAY" for 10$ off any purchase of 40$ or more.</p>
                </div>

            </div>
        </>
    )
}

