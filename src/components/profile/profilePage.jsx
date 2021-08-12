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
                <div id="submit-info">
            <div className="container">
                <div id="submit-row" className="row justify-content-center align-items-center">
                    <div id="submit-column" className="col-md-6">
                        <div id="submit-form" className="form" action="" method="post">
                            <h3 className="text-center text">Update about me</h3>
                            <div className="form-group">
                                <label for="first-name" className="text">First Name:</label>
                                <input type="text"  name="first-name" className="form-control" autoComplete="new-first-name"></input>
                            </div>
                            <div className="form-group">
                                <label for="last-name" className="text">Last Name:</label>
                                <input type="text"  name="last-name" className="form-control" autoComplete="new-last-name"></input>
                            </div>
                            <div className="form-group">
                                <label for="email" className="text">Email:</label>
                                <input type="text"  name="email" className="form-control" autoComplete="new-email"></input>
                            </div>
                            <div className="form-group">
                                <label for="age" className="text">Age:</label>
                                <input type="text"  name="age" className="form-control" autoComplete="new-age"></input>
                            </div>
                            <div className="form-group">
                                <label for="username" className="text">Username:</label>
                                <input type="text" name="username" className="form-control" autoComplete="new-username"></input>
                            </div>
                            <div className="form-group">
                                <label for="password" className="text">Password:</label>
                                <input type="password"  name="age" className="form-control" autoComplete="new-password"></input>
                            </div>

                            

                            <div className="form-group">
                                <input type="button" value='Submit' className="leftButton" onClick=''   /> 
                            </div>

                        </div>
                    </div>
                </div> 
            </div>
        </div>
            </div>
            :<h3>No user data</h3>
            }
        </>
    )
}
