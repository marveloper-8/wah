import React from 'react'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'

const ExistingAddress = e => {
    return <>
        <section className="double-section">
            <span className="head-two">Address Details</span>
            <span onClick={e.function}>
                <ButtonTwo
                    text="Add New Address"
                    styling="bg-primary"
                />
            </span>
        </section>
        <section className="section-two">
            <section className="inner">
                <div className="double-item">
                    <div>
                        <div className="name">Adewale Uchechi</div>
                        <div className="small">
                            <p>244, Felix brown street, Epic place estate, Ikeja, Lagos Nigeria.</p>
                            <p>Ikeja LGA</p>
                            <p>08128765467</p>
                            <div className="default">Default Address</div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="button-container">
                            <ButtonTwo
                                text="Edit"
                                styling="bg-primary half-input"
                            />
                        </div>
                        <div className="button-container">
                            <ButtonTwo
                                text="Delete"
                                styling="bg-white-border-red half-input"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="line-break"></div>
            <section className="inner">
                <div className="double-item">
                    <div>
                        <div className="name">Fela Clarkson</div>
                        <div className="small">
                            <p>244, Felix brown street, Epic place estate, Ikeja, Lagos Nigeria.</p>
                            <p>08128765467</p>
                            <div className="undefault">Set as Default Address</div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="button-container">
                            <ButtonTwo
                                text="Edit"
                                styling="bg-primary half-input"
                            />
                        </div>
                        <div className="button-container">
                            <ButtonTwo
                                text="Delete"
                                styling="bg-white-border-red half-input"
                            />
                        </div>
                    </div>
                </div>    
            </section>
        </section>
    </>
}

export default ExistingAddress
