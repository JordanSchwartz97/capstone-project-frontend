
import React, { useState,useEffect } from 'react';
import axios from 'axios';


function LoginPage(props) {
    const useremail = useFormInput('');
    const userpassword = useFormInput('');
    const [Auth, setAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    

    const login = async() => {
        const credentials = { email: useremail.value,
                              password: userpassword.value };

        const response =  await axios.post("http://localhost:5000/api/auth/login/", credentials);
        console.log("x-auth-token",response.headers['x-auth-token'])

        localStorage.setItem('token', response.headers['x-auth-token']);
        const tokenFromStorage = localStorage.getItem('token') ;
        console.log(tokenFromStorage)
        setToken(tokenFromStorage);
        if(token != null ){
            console.log("token is not nul", token)
           setAuth(true);
        }    
  
    }

    useEffect(() => {
     
        console.log("useEffect")
      
        
        if (token ){
            console.log("history push")
            props.history.push('/home');
            }
            else {
                console.log("failed")
               //alert("failed login! try again")
                props.history.push('/');
            }
      }, [token]);

  
  
    return (
        <div id="login">
            <h3 className="text-center text-white pt-5">Login Form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-form" className="form" action="" method="post">
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label for="email" className="text-info">Email:</label>
                                <input type="text" {...useremail} name="email" className="form-control" autoComplete="new-email"></input>
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-info">Password:</label>
                                <input type="password" {...userpassword} name="username" className="form-control" autoComplete="new-password"></input>
                            </div>
                            <div className="form-group">
                                <label for="remember-me" className="text-info"><span>Remember Me</span><input id="remember-me" name="remember-me" type="checkbox"></input></label>
                                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                                <input type="button" className="leftButton" value={loading ? 'Loading...' : 'Login'} onClick={ login} disabled={loading} /> 
                            </div>
                            <div id="register-link" className="text-right">
                                <a href="/register" className="text-info">Register Here</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
   
     );
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
  
  export default LoginPage;

 // <div className='input-div'>
    //     Login<br /><br />
    //     <div>
    //         Email<br />
    //         <input type="text" {...useremail} autoComplete="new-email" />
    //     </div>
    //     <div style={{ marginTop: 10 }}>
    //         Password<br />
    //         <input type="password" {...userpassword} autoComplete="new-password" />
    //     </div>
    //     {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
    //   <input type="button" className="leftButton" value={loading ? 'Loading...' : 'Login'} onClick={ login} disabled={loading} />  
    // </div>