import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteAddress, getAddress } from "../../../redux/actions/user";
import Swal from 'sweetalert2'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'
import EditAddress from './EditAddress'

const Addresses = e => {
    const dispatch = useDispatch();
    const delete_address = useSelector(state => state.user.deleteAddress)

    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false)
    const data = useState({
        address_id: `${e.item.id}`
    });

    console.log(data)
    console.log(e.item)
    
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
                        <span onClick={() => setEdit(true)}>
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

        <EditAddress 
            style={edit ? "edit-address-popup edit-address" : "edit-address"} 
            value={e.item} 
            closeFunction={() => setEdit(false)}
        />
    </>
}

export default Addresses
