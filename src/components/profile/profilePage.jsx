import axios from 'axios'
import Navbar from '../navbar/navbar'
import logo from './tech-x.png'
import React, { useState,useEffect } from 'react';
import './profilePage.css'


    function ProfilePage(props) {
        console.log(props.user._id)
        const [error, setError] = useState(null);
        const userfirstName = useFormInput('');
        const userlastName = useFormInput('');
        const useremail = useFormInput('');
        const userage = useFormInput('');
        const username = useFormInput('');
        const userpassword = useFormInput('');
        
        const updateUserInfo = async(props) => {
            console.log('updateUserinfo is running.')
            const editUser = {
                firstName: userfirstName.value,
                lastName: userlastName.value,
                email: useremail.value,
                age: userage.value,
                username: username.value,
                userpassword: userpassword.value
            }
           
            const response = await axios.put(`http://localhost:5000/api/collections/users/${props.user._id}`, editUser)
            console.log(response)
        }
        

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
            <div className="submit-info-container">
                <div id="submit-row" className="row justify-content-center align-items-center">
                    <div id="submit-column" className="col-md-6">
                        <div id="submit-form" className="form" action="" method="post">
                            <h3 className="text-center text">Update about me</h3>
                            <div className="form-group">
                                <label for="first-name" className="text">First Name:</label>
                                <input type="text" {...userfirstName}  name="first-name" className="form-control" autoComplete="new-first-name"></input>
                            </div>
                            <div className="form-group">
                                <label for="last-name" className="text">Last Name:</label>
                                <input type="text" {...userlastName} name="last-name" className="form-control" autoComplete="new-last-name"></input>
                            </div>
                            <div className="form-group">
                                <label for="email" className="text">Email:</label>
                                <input type="text" {...useremail} name="email" className="form-control" autoComplete="new-email"></input>
                            </div>
                            <div className="form-group">
                                <label for="age" className="text">Age:</label>
                                <input type="text" {...userage} name="age" className="form-control" autoComplete="new-age"></input>
                            </div>
                            <div className="form-group">
                                <label for="username" className="text">Username:</label>
                                <input type="text" {...username} name="username" className="form-control" autoComplete="new-username"></input>
                            </div>
                            <div className="form-group">
                                <label for="password" className="text">Password:</label>
                                <input type="password" {...userpassword} name="age" className="form-control" autoComplete="new-password"></input>
                            </div>

                            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

                            <div className="form-group">
                                <input type="button" value='Submit' className="btn submit-info-btn btn-primary" onClick={updateUserInfo}  /> 
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
const useFormInput = initialValue => {
            const [value, setValue] = useState(initialValue);
          
            const handleChange = e => {
              setValue(e.target.value);
            }
            return {
              value,
              onChange: handleChange
            }
          }
export default ProfilePage