import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// styling
import './style.css'
// icons
import logo from '../../icons/logo.svg'
// components
import Signup from './Signup'
import OTP from './OTP'
import Login from './Login'
import ForgotPassword from './ForgotPassword'

const Authentication = () => {
    // functions
    const [functions, setFunctions] = useState({
        signup: true,
        otp: false,
        login: false,
        forgot_password: false
    })

    console.log(functions)

    const Components = () => {
        if(functions.signup === true){
            return <Signup  function={() => setFunctions({
                        signup: false, 
                        otp: true, 
                        login: false,
                        forgot_password: false
                    })} />
        }else if(functions.otp === true){
            return <OTP />
        }else if(functions.login === true){
            return <Login   function={() => setFunctions({
                        signup: false, 
                        otp: false, 
                        login: false,
                        forgot_password: true
                    })} />
        }else if(functions.forgot_password === true){
            return <ForgotPassword />
        }
    }

    console.log(functions.signup)
    return (
        <div className="authentication">
            <div className="logo">
                <Link className="link" to='/'><img src={logo} alt="logo" /></Link>
            </div>

            <div className="form">
                <div className="nav">
                    <div className="item create-account"
                        onClick={() => setFunctions({
                            signup: true, 
                            login: false, 
                            otp: false,
                            forgot_password: false
                    })}>Create Account</div>
                    <div className="item"
                        onClick={() => setFunctions({
                            signup: false, 
                            login: true, 
                            otp: false,
                            forgot_password: false
                    })}>Have an Account?</div>
                </div>
                
                {Components()}
            </div>
        
        </div>
    )
}

export default Authentication
