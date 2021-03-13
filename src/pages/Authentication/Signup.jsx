import React from 'react'
// widgets
import TextInput from '../../widgets/TextInput'
import TextInputDouble from '../../widgets/TextInputDouble'
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

const Signup = e => {
    return <form>
            <div className="third-party">
                {third_party.map(item => {
                    return <div className="item" key={item.text}>
                        <img src={item.image} alt={item.text} />
                        <span>Sign up with {item.text}</span>
                    </div>
                })}
            </div>

            <div className="or"><span>OR</span></div>

            <div className="input-container">
                <div className="double-item">
                    <TextInputDouble
                        label="First Name"
                        type="text"
                        styling="bg-white"
                    />
                    <TextInputDouble
                        label="Last Name"
                        type="text"
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <TextInput
                        label="Email Address"
                        type="email"
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <TextInput
                        label="Phone Number"
                        type="phone"
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

                <div className="item button-item" onClick={e.function}>
                    <Button
                        text="Create Account"
                        type="button"
                        styling="bg-primary full-input"
                    />
                </div>  
            </div>
        </form>

}

export default Signup
