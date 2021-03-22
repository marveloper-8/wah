import React from 'react'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'
// icons
import mastercard from '../../../icons/mastercard.svg'

const PaymentInfo = e => {
    return <>
        <section className="double-section">
            <span className="head-two">Payment Methods</span>
            <span onClick={e.function}>
                <ButtonTwo
                    text="Add New Credit/Debit Card"
                    styling="bg-primary"
                />
            </span>
        </section>
        <section className="section-two">
            <section className="inner">
                <div className="double-item">
                    <div className="card-details">
                        <div className="logo">
                            <img src={mastercard} alt="mastercard" />
                        </div>
                        <div>
                            <div className="card-details-item">Master Card Debit (5432)</div>
                            <div className="card-details-item">02 / 2023</div>
                            <div className="card-details-item">Oluwafemi Allen</div>
                        </div>
                    </div>
                    <div className="right">
                        <span onClick={e.function}>
                            <ButtonTwo
                                text="Delete"
                                styling="border-grey half-input"
                                label_size={16}
                            />
                        </span>
                    </div>
                </div>
                <div className="default small">Default Payment Method</div>
            </section>
        </section>
    </>
}

export default PaymentInfo
