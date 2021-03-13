import React from 'react'
// widgets
import TextInput from '../../widgets/TextInput'
import Button from '../../widgets/Button'

const ForgotPassword = () => {
    return <form>
            <div className="input-container">
                <div className="title">Reset Password</div>
                <p>Type in your email address below and we will send you instructions on how to reset your password.</p>
                <div className="item">
                    <TextInput
                        label="Email Address"
                        type="email"
                        styling="bg-white"
                    />
                </div>

                <div className="item button-item">
                    <Button
                        text="Reset Password"
                        type="submit"
                        styling="bg-primary full-input"
                    />
                </div>  
            </div>
        </form>

}

export default ForgotPassword
