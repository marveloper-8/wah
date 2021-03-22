import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {register} from '../../redux/actions/actionsAuth'
import {clearErrors} from '../../redux/actions/actionsError'
import Swal from 'sweetalert2'
// styling
import './style.css'
// widgets
import TextInput from '../../widgets/TextInput'
import TextInputDouble from '../../widgets/TextInputDouble'
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

const Signup = props => {

    const [firstName, setFirstName] = useState('Joshua')
    const [lastName, setLastName] = useState('Equere')
    const [name, setName] = useState(`${firstName} ${lastName}`)
    const [email, setEmail] = useState('marveloper.8@gmail.com')
    const [phone_no, setPhone] = useState('08152298288')
    const [role, setRole] = useState('customer')
    const [password, setPassword] = useState('123456')
    const [msg, setMsg] = useState(null)


    console.log(props.error)

    console.log(props.isAuthenticated)

    console.log(localStorage.getItem('token'))


    const propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register:PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }



    console.log(
        name,
        email,
        phone_no,
        role,
        password,
        msg
    )
    

    const onSubmit = e => {
        e.preventDefault()

        const newUser = {
            name,
            email,
            phone_no,
            role,
            password
        }

        props.register(newUser)
    }

    useEffect(() => {
        if(props.error.id === 'REGISTER_FAIL'){
            setMsg(props.error.msg.msg)
        } 

        if(props.error.id === 'REGISTER'){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Success!',
                text: "You have registered your account successfully",
                showConfirmButton: false,
                timer: 3000
            })
        } else if(props.error.id === 'REGISTER_FAIL'){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error!',
                text: msg,
                showConfirmButton: false,
                timer: 3000
            })
        }
    }, [props, onSubmit])

    return <div className="authentication">
        <div className="logo">
            <Link className="link" to='/'><img src={logo} alt="logo" /></Link>
        </div>

        <div className="form">
            <div className="nav">
                <div className="item create-account active">
                    Create Account
                </div>
                <div className="item">
                    <Link className="link" to='/login'>
                        Have an Account?
                    </Link>
                </div>
            </div>
    
            <form onSubmit={onSubmit}>
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
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            required={true}
                        />
                        <TextInputDouble
                            label="Last Name"
                            type="text"
                            styling="bg-white"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            required={true}
                        />
                    </div>

                    <div className="item">
                        <TextInput
                            label="Email Address"
                            type="email"
                            styling="bg-white"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required={true}
                        />
                    </div>

                    <div className="item">
                        <TextInput
                            label="Phone Number"
                            type="phone_no"
                            styling="bg-white"
                            value={phone_no}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="item">
                        <TextInput
                            label="Password"
                            type="password"
                            styling="bg-white"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required={true}
                        />
                    </div>  

                    {/* <div className="item button-item" onClick={e.function}> */}
                        <Button
                            text="Create Account"
                            type="submit"
                            styling="bg-primary full-input"
                        />
                    {/* </div>   */}
                </div>
            </form>
        </div>
    </div>
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})
export default connect(
    mapStateToProps, 
    {register, clearErrors}
)(Signup)