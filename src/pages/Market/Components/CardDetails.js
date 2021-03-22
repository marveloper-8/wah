import React from 'react'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'
// icons
import mastercard from '../../../icons/mastercard.svg'

const CardDetails = e => {
    return <div className="double-container card-details-container">
        <div className="content card-details">
            <div className="logo">
                <img src={mastercard} alt="mastercard" />
            </div>
            <div>
                <div className="card-details-item">Master Card Debit (5432)</div>
                <div className="card-details-item">02 / 2023</div>
                <div className="card-details-item">Oluwafemi Allen</div>
            </div>
        </div>
        <div className="button-container">
            <span onClick={e.function}>
                <ButtonTwo
                    text="Change"
                    styling="bg-white-border-primary half-input"
                    label_size={16}
                />
            </span>
        </div>
    </div>
}

export default CardDetails
