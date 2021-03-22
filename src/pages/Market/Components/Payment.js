import React from 'react'
// widgets
import RadioInput from '../../../widgets/RadioInput'
import RadioImageInput from '../../../widgets/RadioImageInput'
import ButtonTwo from '../../../widgets/ButtonTwo'
// icons
import money from '../../../icons/money.svg'
// components
import CardDetails from './CardDetails'

const Payment = e => {
    const CardDetailsComp = () => {
        if(e.cardDetails){
            return <CardDetails function={e.function} />
        } else{
            return <div className="double-container payment-button-container">
                <span onClick={e.function}>
                    <ButtonTwo
                        text="Add Credit/Debit Card"
                        styling="bg-white-border-primary full-input"
                    />
                </span>
            </div>
        }
    }

    return <>
        <div className="item">
            <div className="sub-head">Choose Payment Method</div>
            <div className="content">
                <p>How do you want to pay for your order?</p>
                <div className="radio-container">
                    <RadioInput 
                        name="payment"
                        label="Pay with Credit/Debit Card" 
                        input_size={24}
                        text_size={16}
                        position={6}
                    />
                </div>
                {CardDetailsComp()}
            </div>
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

export default Payment
