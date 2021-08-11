import React from 'react'
import Navbar from '../navbar/navbar'
import logo from './tech-x.png'

    export default function ProfilePage(props) {
        console.log(props.user, 'this is profile')
        

    return (
        
        <>
            <Navbar/>
            
            {props.user ?
            <div className="profile-page">
                <div className="profile-container">
                    <div className="image-container">
                        <img src={logo}></img>
                    </div>
                    <div className="about-me-container">
                        <h4 className="Users-firstName">First Name:{props.user.firstName}</h4>
                        <h4 className="Users-lastName">Last Name:{props.user.lastName}</h4>
                        <h4 className="Users-email">Email:{props.user.email}</h4>
                        <h4 className="Users-age">Age:{props.user.age}</h4>
                        <h4 className="Users-username">Username:{props.user.username}</h4>
                    </div>
                </div>
            </div>
            :<h3>No user data</h3>
            }
        </>
    )
}
