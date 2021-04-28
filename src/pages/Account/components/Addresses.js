import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteAddress, getAddress, editAddress } from "../../../redux/actions/user";
import Swal from 'sweetalert2'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'
import TextInput from '../../../widgets/TextInput'

const Addresses = e => {
    const dispatch = useDispatch();
    const delete_address = useSelector(state => state.user.deleteAddress)
    const edit_address = useSelector(state => state.user.editAddress)

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false)
    const [data, setData] = useState({
        address_id: `${e.item.id}`,
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
    
    const deleteFunction = e => {
        e.preventDefault()
        const { address_id } = data;
        const infoData = {
            address_id
        };
        dispatch(deleteAddress(infoData))
        setLoading(true)
        setLoading2(true)
        dispatch(getAddress());
    }
    
    useEffect(() => {
        if(loading2 && delete_address.success && !delete_address.processing){
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
            dispatch(getAddress());
            // window.location.reload()
        } else if(loading2 && !delete_address.success && !delete_address.processing){
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
            dispatch(getAddress());
        } 
    }, [delete_address, loading2, dispatch])
    
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
        dispatch(editAddress(infoData))
        setLoading(true)
        setLoading2(true)
    }
    
    useEffect(() => {
        if(loading2 && edit_address.success && !edit_address.processing){
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
            // window.location.reload()
        } else if(loading2 && !edit_address.success && !edit_address.processing){
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
    }, [edit_address, loading2])

    return <>
        <section className="inner">
            <div className="double-item">
                <div>
                    <div className="name">{e.item.name}</div>
                    <div className="small">
                        <p>{e.item.address}</p>
                        <p>{e.item.phone}</p>
                        <div className="undefault">Set as Default Address</div>
                    </div>
                </div>
                <div className="right">
                    <div className="button-container">
                        <span>
                            <ButtonTwo
                                text="Edit"
                                styling="bg-primary half-input"
                                disabled={loading ? true : false}
                            />
                        </span>
                    </div>
                    <div className="button-container">
                        <span onClick={deleteFunction}>
                            <ButtonTwo
                                text={loading ? "Please Wait..." : "Delete"}
                                styling="bg-white-border-red half-input"
                                disabled={loading ? true : false}
                            />
                        </span>
                    </div>
                </div>
            </div>    
        </section>
        <div className="line-break"></div>

        <div className="edit-address-popup">
            <div className="background"></div>
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
                    type="number"
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
        </div>
    </>
}

export default Addresses
