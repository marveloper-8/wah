import React from 'react'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'

const PaymentNull = e => {
    return <section>
        <div className="head">Add New Address</div>
        <div className="small">Please enter an address you would like to save and deliver your items to.</div>
        <div className="button-container-two">
            <span onClick={e.function}>
                <ButtonTwo
                    text="Add Credit/Debit Card"
                    styling="bg-primary half-input"
                />
            </span>
        </div>
    </section>
}

export default PaymentNull
