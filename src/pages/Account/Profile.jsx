import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateProfile } from "../../redux/actions/user";
import Swal from 'sweetalert2'
// widgets
import ButtonTwo from '../../widgets/ButtonTwo'
import TextInput from '../../widgets/TextInput'

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.authUser.user)
    const update_profile = useSelector(state => state.user.updateProfile)

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false)
    const [data, setData] = useState({
        firstName: user.name.split(' ')[0],
        lastName: user.name.split(' ')[1],
        phone_no: user.phone,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData({ ...data, [name]: value });
    };

    console.log(data.firstName, data.lastName, data.phone_no)

    const handleSubmit = e => {
        e.preventDefault()
        const { phone_no, firstName, lastName } = data;
        const userInfo = {
            name: `${firstName} ${lastName}`,
            phone_no,
            // token
        };
        dispatch(updateProfile(userInfo))
        setLoading(true)
        setLoading2(true)
        // dispatch(setUser(userInfo));
    }
    
    useEffect(() => {
        if(loading2 && update_profile.success && !update_profile.processing){
            setLoading(false)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Success!',
                text: 'Profile updated successfully',
                showConfirmButton: false,
                timer: 3000
            })
            setLoading2(false)
            // window.location.reload()
        } else if(loading2 && !update_profile.success && !update_profile.processing){
            setLoading(false)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error!',
                text: 'Profile update failed',
                showConfirmButton: false,
                timer: 3000
            })
            setLoading2(false)
        } 
    }, [update_profile, loading2])

    console.log(update_profile.success)

    return <section>
        <div className="head">My Profile</div>
        <div className="small">Feel free to edit any of your details below so your account is totally up to date.</div>
        <form onSubmit={handleSubmit}>
            <TextInput
                label="First Name"
                type="text"
                styling="bg-white"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                label_size={16}
                disabled={loading ? true : false}
            />
            <TextInput
                label="Last Name"
                type="text"
                styling="bg-white"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                label_size={16}
                disabled={loading ? true : false}
            />
            <TextInput
                label="Phone Number"
                type="phone_no"
                styling="bg-white"
                name="phone_no"
                value={data.phone_no}
                onChange={handleChange}
                label_size={16}
                disabled={loading ? true : false}
            />
            <div className="button-container">
                <span>
                    <ButtonTwo
                        text={loading ? "Please Wait..." : "Save Changes"}
                        type="submit"
                        styling="bg-primary half-input"
                        disabled={loading ? true : false}
                    />
                </span>
            </div>
        </form>
    </section>
}

export default Profile
