import axios from 'axios';
import React, {useState,useEffect} from 'react';


function LoginPage(props) {
    const useremail = useFormInput('');
    const userpassword = useFormInput('');
    const [token, setToken] = useState(null);
    const [Auth, setAuth] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async() => {
        const credentials = { email: useremail.value,
                              password: userpassword.value};
        console.log(credentials)
        let response = await axios.post("http://localhost:5000/api/auth/login", credentials);
        
        localStorage.setItem('token', response.headers['x-auth-token']);
        const tokenFromStorage = localStorage.getItem('token') ;

        setToken(tokenFromStorage);
        if(token != null ){
            console.log("token is not null", token)
           setAuth(true);
    }
};

    useEffect(() => {
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

      const handleLogin =  () => {    
        login();      
       console.log("token in handleLogin()",token);
       
     if (Auth ){
     props.history.push('/profile');
     }
     else {
         alert("failed login! try again")
         props.history.push('/');
     }
   }
    return (
        <div className = 'input-div'>
           <div>Email
                <input type="text"{...useremail} autoComplete='new-email'/>
            </div> 
            <div>Password
                <input type="text"{...userpassword} autoComplete='new-email'/>
            </div> 
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
           <input type="button" className="leftButton" onClick={login}   />
        </div>
    );
}
const useFormInput = initialValue => {
    const [value,setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}
export default LoginPage