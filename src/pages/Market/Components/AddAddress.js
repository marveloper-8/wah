import React from 'react'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'
import TextInputDouble from '../../../widgets/TextInputDouble'
import TextInput from '../../../widgets/TextInput'
import SelectInputTwo from '../../../widgets/SelectInputTwo'
// data
const state = [
    {
        "name": "Lagos",
        "value": "lagos"
    },
    {
        "name": "Imo",
        "value": "imo"
    }
]
const lga = [
    {
        "name": "Ikeja",
        "value": "ikeja"
    },
    {
        "name": "Eti Osa",
        "value": "eti-osa"
    }
]

const AddAddress = e => {
    return <div className="item">
        <div className="sub-head">Delivery Address</div>
        <form>
            <div className="double-input-item">
                <TextInputDouble
                    label="First Name"
                    type="text"
                    styling="bg-white"
                />
                <TextInputDouble
                    label="Last Name"
                    type="text"
                    styling="bg-white"
                />
            </div>
            <TextInput
                label="Phone"
                type="phone"
                styling="bg-white"
            />
            <TextInput
                label="Address"
                type="address"
                styling="bg-white"
            />
            <TextInput
                label="City"
                type="text"
                styling="bg-white"
            />
            <SelectInputTwo 
                label="State"
                options={state}
                styling="bg-white"
                border="bg-white-border-primary"
            />
            <SelectInputTwo 
                label="LGA"
                options={lga}
                styling="bg-white"
                border="bg-white-border-primary"
            />
            <div className="button-container">
                <div onClick={e.function}>
                    <ButtonTwo
                        text="Save"
                        styling="bg-primary third-input"
                    />
                </div>
            </div>
        </form>
        
    </div>
    
}

export default AddAddress
