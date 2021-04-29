import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addAddress, getAddress } from "../../../redux/actions/user";
import Swal from 'sweetalert2'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'
import TextInput from '../../../widgets/TextInput'
// icons
import arrow_left from '../../../icons/arrow-left.svg'

const EditAddress = e => {
    const dispatch = useDispatch();
    const add_address = useSelector(state => state.user.addAddress)

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false)
    const [data, setData] = useState({
        address_id: `${e.value.id}`,
        action: "update",
        address_name: e.value.name,
        apartment_no: e.value.apartment_no,
        address: e.value.address,
        zip_code: e.value.zip_code,
        town: e.value.town,
        city: e.value.city,
        state: e.value.state,
        country: e.value.country,
        phone: e.value.phone,
        phone_2: e.value.phone_2,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData({ ...data, [name]: value });
    };
    
    const onSubmit = e => {
        e.preventDefault()
        const { address_id, action, address_name, apartment_no, address, zip_code, town, city, state, country, phone, phone_2 } = data;
        const infoData = {
            address_id,
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
                text: 'Address changed successfully',
                showConfirmButton: false,
                timer: 3000
            })
            setLoading2(false)
            // window.location.reload()
        } else if(loading2 && !add_address.success && !add_address.processing){
            setLoading(false)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error!',
                text: 'Address change failed',
                showConfirmButton: false,
                timer: 3000
            })
            setLoading2(false)
        } 
    }, [add_address, loading2])
    
    return <div className={e.style}>
        <div className="background" onClick={e.closeFunction}></div>
        <div className="form-content">
            <form onSubmit={onSubmit}>
                <div className="close required" onClick={e.closeFunction}>close &times;</div>
                <div className="head-three">Edit <b>{e.value.name}</b></div>
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
                    name="apartment_no"
                    value={data.apartment_no}
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
                        text={loading ? "Please Wait..." : "Save Changes"}
                        styling="bg-primary full-input"
                        disabled={loading ? true : false}
                    />
                </div>
            </form>
        </div>
        
    </div>

}

export default EditAddress
