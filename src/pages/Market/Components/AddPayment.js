import React from 'react'
// widgets
import SelectInputDoubleTwo from '../../../widgets/SelectInputDoubleTwo'
import RadioImageInput from '../../../widgets/RadioImageInput'
import TextInput from '../../../widgets/TextInput'
import ButtonTwo from '../../../widgets/ButtonTwo'
import CheckboxInput from '../../../widgets/CheckboxInput'
// icons
import money from '../../../icons/money.svg'
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

const AddPayment = e => {
    return <>
        <div className="item">
            <div className="sub-head">Choose Payment Method</div>
            <div className="double-container">
                <div className="content">
                    <p>Add Credit/Debit Card</p>
                </div>
                <div className="button-container">
                    <span onClick={e.function}>
                        <ButtonTwo
                            text="Cancel"
                            styling="bg-white-border-primary half-input"
                        />
                    </span>
                </div>
            </div>
            <form>
                <TextInput
                    label="Card Number"
                    type="number"
                    styling="bg-white"
                />
                <div className="double-input-item">
                    <SelectInputDoubleTwo 
                        label="Expiry Date"
                        options={month}
                        styling="bg-white"
                        border="bg-white-border-primary"
                    />
                    <SelectInputDoubleTwo 
                        label="&nbsp;"
                        options={year}
                        styling="bg-white"
                        border="bg-white-border-primary"
                    />
                </div>
                <TextInput
                    label="Name on Card"
                    type="text"
                    styling="bg-white"
                />
                <TextInput
                    label="CVV"
                    type="number"
                    styling="bg-white third-input"
                />
                <CheckboxInput 
                    value="default"
                    name="Make this your default payment method"
                />
                <div className="button-container">
                    <div onClick={e.save}>
                        <ButtonTwo
                            text="Save"
                            styling="bg-primary third-input"
                        />
                    </div>
                </div>
            </form>
        </div>
        
        <div className="item">
            <div className="double-container">
                <div className="content">
                    <RadioImageInput 
                        name="payment"
                        label="Pay with Credit/Debit Card" 
                        input_size={24}
                        text_size={16}
                        position={6}
                        image={money}
                        image_size={25}
                        image_position={0}
                    />
                </div>
                <div></div>
            </div>
        </div>
    </>
}

export default AddPayment
