import React from 'react'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'

const Address = e => {
    return <div className="item">
        <div className="sub-head">Delivery Address</div>
        <div className="double-container">
            <div className="content">
                <div className="content-item">
                    Adewale Uchechi
                </div>
                <div className="content-item">
                    <p>244, Felix brown street, Epic place estate, Ikeja, Lagos Nigeria.</p>
                    <p>Ikeja LGA</p>
                </div>
                <p>08128765467</p>
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
    </div>
    
}

export default Address
