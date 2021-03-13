import React, {useState} from 'react'
// components
import AddAddress from './components/AddAddress'
import ExistingAddress from './components/ExistingAddress'

const Address = () => {
    // functions
    const [address, addAddress] = useState(true)

    const Component = () => {
        if(address){
            return <ExistingAddress function={() => addAddress(false)} />
        } else{
            return <AddAddress function={() => addAddress(true)} />
        }
    }

    return <>{Component()}</>
}

export default Address
