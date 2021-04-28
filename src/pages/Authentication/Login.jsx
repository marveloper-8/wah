import React, {useState} from 'react'
import { toast } from "../../helpers/apiRequests";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { loginUser } from "../../services/auth";
import { setUser } from "../../redux/actions/user";
import Swal from 'sweetalert2'
// styling
import './style.css'
// widgets
import TextInput from '../../widgets/TextInput'
import Button from '../../widgets/Button'
// icons
import logo from '../../icons/logo.svg'
import facebook from '../../icons/facebook.svg'
import google from '../../icons/google.svg'
import apple from '../../icons/apple.svg'
// constants
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
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
      email: "",
      password: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setData({ ...data, [name]: value });
    };

    console.log(data.email, data.password)

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const { email, password } = data;
      const userInfo = {
        email,
        password,
      };
  
      try {
        toast("Processing please wait...");
        let response = await loginUser(userInfo);
  
        if (response) {
          if (response.data) {
            localStorage.setItem("chosen_token", response.data.token);
            dispatch(setUser(response.data));
            setLoading(false);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Success!',
                text: 'Signed in successfully',
                showConfirmButton: false,
                timer: 3000
            })
          }
        }
      } catch (x) {
        setLoading(false);
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error!',
            text: 'Sign in unsuccessful',
            showConfirmButton: false,
            timer: 3000
        })
      }
    };

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
    
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <div className="item">
                        <TextInput
                            label="Email Address"
                            type="email"
                            styling="bg-white"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            disabled={loading ? true : false}
                            required={true}
                        />
                    </div>

                    <div className="item">
                        <TextInput
                            label="Password"
                            type="password"
                            styling="bg-white"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            disabled={loading ? true : false}
                            required={true}
                        />
                    </div>  

                    <div className="item button-item">
                        <Button
                            text={loading ? "Please Wait..." : "Sign In"}
                            disabled={loading ? true : false}
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

export default Login
