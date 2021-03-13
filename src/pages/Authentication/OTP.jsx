import React from 'react'
// widgets
import TextInput from '../../widgets/TextInput'
import Button from '../../widgets/Button'

const OTP = () => {
    return <form>
            <div className="input-container">
                <div className="title">An OTP has been sent to you</div>
                <p>Check your email address or sms for the one time password to verify your account.</p>
                <div className="item">
                    <TextInput
                        label="Enter OTP"
                        type="number"
                        styling="bg-white"
                    />
                </div>

                <div className="item button-item">
                    <Button
                        text="Verify"
                        type="submit"
                        styling="bg-primary full-input"
                    />
                </div>  
            </div>
        </form>

}

export default OTP
