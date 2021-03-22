import React from 'react'
// images
import sachet_water from '../../../images/sachet-water.png'
// icons
import orders from '../../../icons/orders.svg'
import info from '../../../icons/help.svg'
import date from '../../../icons/date.svg'
import delivery from '../../../icons/delivery.svg'
import check from '../../../icons/check.svg'
import mastercard from '../../../icons/mastercard.svg'

const OrdersDetails = () => {
    return <>
        <section>
            <div className="head">Order Details</div>
            <div className="small">Check out the details of your order below.</div>
        </section>
        <section className="progress">
            <div className="circles-container">
                <div className="circle circle-active">
                    <img src={check} alt="check" />
                </div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <div className="bar">
                <div className="value bg-primary"></div>
            </div>
            <div className="head-two">Received</div>
            <div className="small">Dec 03 2020 3:15 PM</div>
        </section>
        <section>
            <div className="section-head">
                <div className="head-three color-primary">Your Order has been received</div>
                <div className="small">Your order has been recieved by a vendor.</div>
            </div>
            <div className="item-half small">
                <div className="double-item-two">
                    <span>
                        <img src={orders} alt="orders" /> Order No:
                    </span>
                    <span>568237414</span>
                </div>
                <div className="double-item-two">
                    <span>
                        <img src={info} alt="info" /> Order Status:
                    </span>
                    <span>Received</span>
                </div>
                <div className="double-item-two">
                    <span>
                        <img src={date} alt="date" /> Order Date:
                    </span>
                    <span>Dec 04 2020</span>
                </div>
                <div className="double-item-two">
                    <span>
                        <img src={delivery} alt="delivery" /> Scheduled Delivery Date:
                    </span>
                    <span>Dec 05 2020</span>
                </div>
            </div>
        </section>
        <section>
            <div className="item-half item">
                <div className="image" style={{
                    backgroundImage: `url(${sachet_water})`, 
                    backgroundSize:`cover`
                }}></div>
                <div className="small">
                    <div className="name">Be Refreshed and cooled sachet water</div>
                    <div className="price">₦ 120.00</div>
                    <div className="values">
                        <div className="item">
                            <div>Type:</div>
                            <div>Bag</div>
                        </div>
                        <div className="item">
                            <div>Qty:</div>
                            <div>1</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <section>
            <div className="section-head">
                <div className="head-three">Delivery Details</div>
            </div>
            <div className="item-half small">
                <p>Adewale Uchechi</p>
                <p>244, Felix brown street, Epic place estate, Ikeja, Lagos Nigeria.</p>
                <p>08128765467</p>
            </div>
        </section>
        <section>
            <div className="section-head">
                <div className="head-three">Payment Details</div>
            </div>
            <div className="item-half small payment-details">
                <div><img src={mastercard} alt="card" /></div>
                <div>
                    <p>Adewale Uchechi</p>
                    <p>244, Felix brown street, Epic place estate, Ikeja, Lagos Nigeria.</p>
                    <p>08128765467</p>
                </div>
            </div>
        </section>
        <section>
            <div className="section-head">
                <div className="head-three">Order Total</div>
            </div>
            <div className="small">
                <div className="double-item-two">
                    <span>SUB - TOTAL</span>
                    <span>₦ 4000.00</span>
                </div>
                <div className="double-item-two">
                    <span>DELIVERY</span>
                    <span>₦ 800.00</span>
                </div>
                <div className="double-item-two total">
                    <span>TOTAL</span>
                    <span>₦ 4800.00</span>
                </div>
            </div>
        </section>
    </>
}

export default OrdersDetails
