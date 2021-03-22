import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'
import {login} from '../../redux/actions/actionsAuth'
import {clearErrors} from '../../redux/actions/actionsError'
import Swal from 'sweetalert2'
// styling
import './style.css'
// widgets
import TextInput from '../../widgets/TextInput'
import Button from '../../widgets/Button'
// icons
import logo from '../../icons/logo.svg'
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

const Login = props => {
    const [email, setEmail] = useState('marveloper.8@gmail.com')
    const [password, setPassword] = useState('123456')
    const [msg, setMsg] = useState(null)

    console.log(email, password, msg)
    

    const onSubmit = e => {
        e.preventDefault()

        const user = {
            email,
            password
        }

        props.login(user)
    }

    useEffect(() => {
        if(props.error.id === 'LOGIN_FAIL'){
            setMsg(props.error.msg.msg)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error!',
                text: msg,
                showConfirmButton: false,
                timer: 3000
            })
        } else if(props.error.id === 'LOGIN'){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Success!',
                text: "You have logged in successfully",
                showConfirmButton: false,
                timer: 3000
            })
        } else{
            setMsg(null)
        }
    }, [props.error])

    // useEffect(() => {
    //      else if(props.error.id === 'LOGIN_FAIL'){
    //     }
    // }, [onSubmit])

    return <div className="authentication">
        <div className="logo">
            <Link className="link" to='/'><img src={logo} alt="logo" /></Link>
        </div>

        <div className="form">
            <div className="nav">
                <div className="item create-account">
                    <Link className="link" to='/signup'>
                        Create Account
                    </Link>
                </div>
                <div className="item active">
                    Have an Account?
                </div>
            </div>
    
            <form onSubmit={onSubmit}>
                <div className="input-container">
                    <div className="item">
                        <TextInput
                            label="Email Address"
                            type="email"
                            styling="bg-white"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required={true}
                        />
                    </div>

                    <div className="item">
                        <TextInput
                            label="Password"
                            type="password"
                            styling="bg-white"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            // required={true}
                        />
                    </div>  

                    <div className="item button-item">
                        <Button
                            text="Sign In"
                            type="submit"
                            styling="bg-primary full-input"
                        />
                    </div> 

                    <div className="forgot-password color-primary">
                        <span onClick={props.function}>Forgot Password?</span>
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
        </div>
    </div>
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    auth: state.auth
})
export default connect(
    mapStateToProps, 
    {login, clearErrors}
)(Login)