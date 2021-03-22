import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/checkout.css'
// widgets
import ButtonTwo from '../../widgets/ButtonTwo'
// components
import Address from './Components/Address'
import AddAddress from './Components/AddAddress'
import Payment from './Components/Payment'
import AddPayment from './Components/AddPayment'
// images
import sachet_water from '../../images/sachet-water.png'
// data
const products = [
    {
        "image": sachet_water,
        "name": "Just water Pack (12 Pieces )",
        "price": 1000,
        "type": "Pack",
        "value": 1
    },
    {
        "image": sachet_water,
        "name": "Be Refreshed and cooled bottled water",
        "price": 1500,
        "type": "10,000L",
        "value": 1
    }
]

const Checkout = () => {
    // functions
    const [functions, setFunctions] = useState({
        add_address: false,
        add_payment: false,
        card_details: false
    })

    const AddressComponent = () => {
        if(functions.add_address){
            return <AddAddress function={() => setFunctions({
                        add_address: false
                    })} />
        } else{
            return <Address function={() => setFunctions({
                        add_address: true
                    })} />
        }
    }

    const PaymentComponent = () => {
        if(functions.add_payment){
            return <AddPayment function={() => setFunctions({
                        add_payment: false
                    })} save={() => setFunctions({
                        card_details: true,
                        add_payment: false
                    })} />
        } else{
            return <Payment function={() => setFunctions({
                        add_payment: true
                    })} cardDetails={functions.card_details} />
        }
    }

    return (
        <div className="checkout">
            <div className="checkout-details">
                <div className="head">Checkout</div>
                {AddressComponent()}
                
                {PaymentComponent()}
                
                <div className="button-container">
                    <ButtonTwo
                        text="Place Order"
                        styling="bg-primary full-input"
                    />
                </div>
            </div>
        
            <div className="list">
                <div className="head">
                    <span className="title">{products.length} Items</span>
                    <Link className="link color-primary" to='/cart'>View Cart</Link>
                </div>
                <div className="item-container">
                    {products.map(item => {
                        return <div className="card" key={item.name}>
                                    <div className="image" style={{
                                        backgroundImage: `url(${item.image})`, 
                                        backgroundSize:`cover`
                                    }}></div>
                                    <div className="text">
                                        <div className="price">₦{item.price}.00</div>
                                        <div className="name">{item.name}</div>
                                        <div className="type">{item.type}</div>
                                        <div className="quantity">Qty: <span className="value">{item.value}</span></div>
                                    </div>
                                </div>
                    })}
                </div>
                <div className="item">
                    <span className="title">Sub-total</span>
                    <span className="value">₦ 4000.00</span>
                </div>
                <div className="item">
                    <span className="title">Delivery</span>
                    <span className="value">₦ 800.00</span>
                </div>
                <div className="item total">
                    <h5 className="title">Total</h5>
                    <h5 className="value">₦ 4800.00</h5>
                </div>
            </div>
        </div>
    )
}

export default Checkout
