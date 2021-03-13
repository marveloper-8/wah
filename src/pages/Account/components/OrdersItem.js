import React from 'react'
// images
import sachet_water from '../../../images/sachet-water.png'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'

const OrdersItem = e => {
    return <>
        <section className="double-section">
            <span className="head-two">My Orders</span>
        </section>
        <section className="orders-item">
            <div className="orders-item-head">
                <span>
                    <span class="smaller">STATUS:</span>
                    <div>Processing</div>
                </span>
                <span>
                    <span class="smaller">ORDERS NO:</span>
                    <div>568237414</div>
                </span>
                <span>
                    <span class="smaller">ORDER DATE:</span>
                    <div>Dec 04, 2020</div>
                </span>
            </div>
            <div className="double-item">
                <div className="item-details">
                    <div className="image" style={{
                        backgroundImage: `url(${sachet_water})`, 
                        backgroundSize:`cover`
                    }}></div>
                    <div className="name">Be Refreshed and cooled sachet water</div>
                </div>
                <div className="right">
                    <span onClick={e.function}>
                        <ButtonTwo
                            text="View Order"
                            styling="bg-white-border-primary half-input"
                            label_size={16}
                        />
                    </span>
                </div>
            </div>
        </section>
        <section className="orders-item">
            <div className="orders-item-head">
                <span>
                    <span class="smaller">STATUS:</span><br />
                    Processing
                </span>
                <span>
                    <span class="smaller">ORDERS NO:</span><br />
                    568237414
                </span>
                <span>
                    <span class="smaller">ORDER DATE:</span><br />
                    Dec 04, 2020
                </span>
            </div>
            <div className="double-item">
                <div className="item-details">
                    <div className="image" style={{
                        backgroundImage: `url(${sachet_water})`, 
                        backgroundSize:`cover`
                    }}></div>
                    <div className="name">Be Refreshed and cooled sachet water</div>
                </div>
                <div className="right">
                    <span onClick={e.function}>
                        <ButtonTwo
                            text="View Order"
                            styling="bg-white-border-primary half-input"
                            label_size={16}
                        />
                    </span>
                </div>
            </div>
        </section>
    </>
}

export default OrdersItem
