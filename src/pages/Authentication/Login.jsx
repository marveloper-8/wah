import React from 'react'
// widgets
import TextInput from '../../widgets/TextInput'
import Button from '../../widgets/Button'
// icons
import google from '../../icons/google.svg'
import facebook from '../../icons/facebook.svg'
import apple from '../../icons/apple.svg'
// data
const third_party = [
    {
        "image": google,
        "text": "Google"
    },
    {
        "image": facebook,
        "text": "Facebook"
    },
    {
        "image": apple,
        "text": "Apple"
    }
]

const Login = e => {
    return <form>
            <div className="input-container">
                <div className="item">
                    <TextInput
                        label="Email Address"
                        type="email"
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <TextInput
                        label="Password"
                        type="password"
                        styling="bg-white"
                    />
                </div>  

                <div className="item button-item">
                    <Button
                        text="Sign In"
                        type="button"
                        styling="bg-primary full-input"
                    />
                </div> 

                <div className="forgot-password color-primary">
                    <span onClick={e.function}>Forgot Password?</span>
                </div> 
            </div>

            <div className="or"><span>OR</span></div>

            <div className="third-party">
                {third_party.map(item => {
                    return <div className="item" key={item.text}>
                        <img src={item.image} alt={item.text} />
                        <span>Sign in with {item.text}</span>
                    </div>
                })}
            </div>
        </form>

}

export default Login
