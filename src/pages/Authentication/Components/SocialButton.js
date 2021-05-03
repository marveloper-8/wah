import React from 'react'
import GoogleLogin from 'react-google-login';

const SocialButton = e => {
    return <div className="item" key={e.value.text}>
            <img src={e.value.image} alt={e.value.text} />
            <span>Sign in with {e.value.text}</span>
        </div>
}

export default SocialButton
