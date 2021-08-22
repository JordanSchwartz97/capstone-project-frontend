import React from 'react'
import Navbar from '../navbar/navbar'
import "./CouponPage.css"
import logo from './tech-x.png'
export default function CouponPage() {
    return (
        <>
        <Navbar/>
            <div className="coupon-container">
                <div className="coupon-container-title">
                    <h3>Currently Active Coupons</h3>
                </div>
                <div className="coupon">
                    <img className="coupon-logo" src={logo} alt="Avatar"></img>
                    <div class="coupon-body" >
                        <h3><b>20% OFF YOUR PURCHASE</b></h3>
                        <p>Use Promo Code: <span class="promo">20OFF</span></p>
                        <p class="expire">Expires: Dec 31, 2021</p>
                    </div>
                </div>
                <div className="coupon">
                    <img className="coupon-logo" src={logo} alt="Avatar"></img>
                    <div class="coupon-body" >
                        <h3><b>FREE SHIPPING ON ANY ORDER</b></h3>
                        <p>Use Promo Code: <span class="promo">FREESHIP</span></p>
                        <p class="expire">Expires: Dec 31, 2021</p>
                    </div>
                </div>
                <div className="coupon">
                    <img className="coupon-logo" src={logo} alt="Avatar"></img>
                    <div class="coupon-body" >
                        <h3><b>10$ OFF FIRST PURCHASE</b></h3>
                        <p>Use Promo Code: <span class="promo">FREE10</span></p>
                        <p class="expire">Expires: Dec 31, 2021</p>
                    </div>
                </div>
                {/* <div className="coupon-container-body ">
                    <p>20OFF: Use code "20OFF" at checkout to recieve 20% off your first purchase.</p>
                    <p>FREESHIP: Use code "FREESHIP" at checkout to recieve freeshipping on any order.</p>
                    <p>FREEDAY: Use code "FREEDAY" for 10$ off any purchase of 40$ or more.</p>
                </div> */}

            </div>
        </>
    )
}

