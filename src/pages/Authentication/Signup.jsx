import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import {useDispatch} from 'react-redux'
import { toast } from "../../helpers/apiRequests";
import { registerUser } from "../../services/auth";
import { setUser } from "../../redux/actions/user";
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
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone_no: "",
        password: "",
        role: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData({ ...data, [name]: value });
    };

    console.log(data.firstName, data.lastName, data.email, data.phone_no, data.password)

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const { firstName, lastName, email, phone_no, password, role } = data;
      const userInfo = {
        name: `${firstName} ${lastName}`,
        email,
        phone_no,
        password,
        role
      };
  
      try {
        toast("Processing please wait...");
        let response = await registerUser(userInfo);
  
        if (response) {
          if (response.data) {
            localStorage.setItem("chosen_token", response.data.access_token);
            dispatch(setUser(response.data));
            setLoading(false);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Success!',
                text: 'Account created successfully',
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
            text: 'Account creation unsuccessful',
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
                <div className="item create-account active">
                    Create Account
                </div>
                <div className="item">
                    <Link className="link" to='/login'>
                        Have an Account?
                    </Link>
                </div>
            </div>
    
            <form onSubmit={handleSubmit}>
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
                            name="firstName"
                            value={data.firstName}
                            onChange={handleChange}
                            disabled={loading ? true : false}
                            required={true}
                        />
                        <TextInputDouble
                            label="Last Name"
                            type="text"
                            styling="bg-white"
                            name="lastName"
                            value={data.lastName}
                            onChange={handleChange}
                            disabled={loading ? true : false}
                            required={true}
                        />
                    </div>

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
                            label="Phone Number"
                            type="phone_no"
                            styling="bg-white"
                            name="phone_no"
                            value={data.phone_no}
                            onChange={handleChange}
                            disabled={loading ? true : false}
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

                    <Button
                        text={loading ? "Please Wait..." : "Create Account"}
                        disabled={loading ? true : false}
                        type="submit"
                        styling="bg-primary full-input"
                    />
                </div>
            </form>
        </div>
    </div>
}

export default Signup
