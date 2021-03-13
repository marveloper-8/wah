import React from 'react'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'
import TextInput from '../../../widgets/TextInput'
import SelectInputDoubleTwo from '../../../widgets/SelectInputDoubleTwo'
import CheckboxInput from '../../../widgets/CheckboxInput'
// data
const month = [
    {
        "name": "January",
        "value": "january"
    },
    {
        "name": "February",
        "value": "february"
    }
]
const year = [
    {
        "name": "2020",
        "value": 2020
    },
    {
        "name": "2021",
        "value": 2021
    }
]

const PaymentAdd = e => {
    return <section>
        <div className="head">Add Payment Method</div>
        <div className="small">Now please enter your card details exactly as they are printed.</div>
        <form>
            <TextInput
                label="Card Number"
                type="number"
                styling="bg-white"
                label_size={16}
            />
            <div className="double-item-two">
                <SelectInputDoubleTwo 
                    label="State"
                    options={month}
                    styling="bg-white"
                    border="bg-white-border-primary"
                />
                <SelectInputDoubleTwo 
                    label="LGA"
                    options={year}
                    styling="bg-white"
                    border="bg-white-border-primary"
                />
            </div>
            <TextInput
                label="Name on Card"
                type="text"
                styling="bg-white"
                label_size={16}
            />
            <TextInput
                label="CVV"
                type="phone"
                styling="bg-white third-input"
                label_size={16}
            />
            
            <CheckboxInput 
                value="default"
                name="Make this your default payment method"
            />
            <div className="button-container">
                <span onClick={e.function}>
                    <ButtonTwo
                        text="Add Card"
                        styling="bg-primary half-input"
                    />
                </span>
            </div>
        </form>
    </section>
}

export default PaymentAdd
