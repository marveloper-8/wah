import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAddress } from "../../../redux/actions/user";
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'
import AddressItem from './Addresses'

const ExistingAddress = e => {
    const dispatch = useDispatch();
    const addresses = useSelector(state => state.user.getAddress.data.data)

    useEffect(() => {
      dispatch(getAddress());
    }, [dispatch]);

    console.log(addresses)

    return <>
        <section className="double-section">
            <span className="head-two">Address Details</span>
            <span onClick={e.function}>
                <ButtonTwo
                    text="Add New Address"
                    styling="bg-primary"
                />
            </span>
        </section>
        <section className="section-two">
            {addresses === undefined ? 
                <section className="inner">Please wait</section>
                : addresses.length < 1 
                ? <section className="inner">You do not have an address connected to this account. Add to proceed</section>
                : addresses.map(item => { return <AddressItem 
                        item={item} 
                        key={item.id}
                    /> })
            }
        </section>
    </>
}

export default ExistingAddress
