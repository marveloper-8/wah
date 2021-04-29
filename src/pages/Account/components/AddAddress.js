import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addAddress, getAddress } from "../../../redux/actions/user";
import Swal from 'sweetalert2'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'
import TextInput from '../../../widgets/TextInput'
// icons
import arrow_left from '../../../icons/arrow-left.svg'

const AddAddress = props => {
    const dispatch = useDispatch();
    const add_address = useSelector(state => state.user.addAddress)

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false)
    const [data, setData] = useState({
        action: "create",
        address_name: "",
        apartment_no: "",
        address: "",
        zip_code: "",
        town: "",
        city: "",
        state: "",
        country: "",
        phone: "",
        phone_2: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData({ ...data, [name]: value });
    };

    console.log(data)
    
    const onSubmit = e => {
        e.preventDefault()
        const { action, address_name, apartment_no, address, zip_code, town, city, state, country, phone, phone_2 } = data;
        const infoData = {
            action,
            name: address_name,
            apartment_no,
            address,
            zip_code,
            town,
            city,
            state,
            country,
            phone,
            phone_2
        };
        dispatch(addAddress(infoData))
        setLoading(true)
        setLoading2(true)
    }
    
    useEffect(() => {
        if(loading2 && add_address.success && !add_address.processing){
            setLoading(false)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Success!',
                text: 'Address deleted successfully',
                showConfirmButton: false,
                timer: 3000
            })
            setLoading2(false)
            props.function()
            // window.location.reload()
        } else if(loading2 && !add_address.success && !add_address.processing){
            setLoading(false)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error!',
                text: 'Address deletion failed',
                showConfirmButton: false,
                timer: 3000
            })
            setLoading2(false)
        } 
    }, [add_address, loading2])
    
    return <section>
        <div className="back color-primary">
            <span onClick={() => props.function()}>
                <img src={arrow_left} alt="arrow" /> Back
            </span>
        </div>

        <div className="head">Add New Address</div>
        <div className="small">Please enter an address you would like to save and deliver your items to.</div>
        <form onSubmit={onSubmit}>
            <TextInput
                label="Address Name"
                type="text"
                styling="bg-white"
                label_size={16}
                name="address_name"
                value={data.address_name}
                onChange={handleChange}
                disabled={loading ? true : false}
                required={true}
            />
            <TextInput
                label="Apartment Number"
                type="text"
                styling="bg-white"
                label_size={16}
                name="address_no"
                value={data.address_no}
                onChange={handleChange}
                disabled={loading ? true : false}
            />
            <TextInput
                label="Delivery Address"
                type="address"
                styling="bg-white"
                label_size={16}
                name="address"
                value={data.address}
                onChange={handleChange}
                disabled={loading ? true : false}
                required={true}
            />
            <TextInput
                label="Zip Code"
                type="text"
                styling="bg-white"
                label_size={16}
                name="zip_code"
                value={data.zip_code}
                onChange={handleChange}
                disabled={loading ? true : false}
            />
            <TextInput
                label="Town"
                type="town"
                styling="bg-white"
                label_size={16}
                name="town"
                value={data.town}
                onChange={handleChange}
                disabled={loading ? true : false}
            />
            <TextInput
                label="City"
                type="city"
                styling="bg-white"
                label_size={16}
                name="city"
                value={data.city}
                onChange={handleChange}
                disabled={loading ? true : false}
            />
            <TextInput
                label="State"
                type="text"
                styling="bg-white"
                label_size={16}
                name="state"
                value={data.state}
                onChange={handleChange}
                disabled={loading ? true : false}
                required={true}
            />
            <TextInput
                label="Country"
                type="country"
                styling="bg-white"
                label_size={16}
                name="country"
                value={data.country}
                onChange={handleChange}
                disabled={loading ? true : false}
                required={true}
            />
            <TextInput
                label="Phone Number"
                type="phone"
                styling="bg-white"
                label_size={16}
                name="phone"
                value={data.phone}
                onChange={handleChange}
                disabled={loading ? true : false}
                required={true}
            />
            <TextInput
                label="Alternate Phone Number"
                type="phone"
                styling="bg-white"
                label_size={16}
                name="phone_2"
                value={data.phone_2}
                onChange={handleChange}
                disabled={loading ? true : false}
            />
            <div className="button-container">
                <ButtonTwo
                    type="submit"
                    text={loading ? "Please Wait..." : "Save Address"}
                    styling="bg-primary full-input"
                    disabled={loading ? true : false}
                />
            </div>
        </form>
    </section>
}

export default AddAddress
