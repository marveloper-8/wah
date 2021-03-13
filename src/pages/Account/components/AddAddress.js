import React from 'react'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'
import TextInput from '../../../widgets/TextInput'
import SelectInputTwo from '../../../widgets/SelectInputTwo'
import CheckboxInput from '../../../widgets/CheckboxInput'
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
    return <section>
        <div className="head">Add New Address</div>
        <div className="small">Please enter an address you would like to save and deliver your items to.</div>
        <form>
            <TextInput
                label="First Name"
                type="text"
                styling="bg-white"
                label_size={16}
            />
            <TextInput
                label="Last Name"
                type="text"
                styling="bg-white"
                label_size={16}
            />
            <TextInput
                label="Phone Number"
                type="phone"
                styling="bg-white"
                label_size={16}
            />
            <TextInput
                label="Address"
                type="address"
                styling="bg-white"
                label_size={16}
            />
            <TextInput
                label="City"
                type="text"
                styling="bg-white"
                label_size={16}
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
            <CheckboxInput 
                value="default"
                name="Make this your default payment method"
            />
            <div className="button-container">
                <span onClick={e.function}>
                    <ButtonTwo
                        text="Save Address"
                        styling="bg-primary full-input"
                    />
                </span>
            </div>
        </form>
    </section>
}

export default AddAddress
