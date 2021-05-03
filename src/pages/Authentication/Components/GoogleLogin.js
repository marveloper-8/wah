import React from 'react'
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'

const SocialButton = e => {
    const responseGoogle = response => {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error!',
            text: response,
            showConfirmButton: false,
            timer: 3000
        })
    }
    return <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
}

export default SocialButton
