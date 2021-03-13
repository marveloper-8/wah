import React from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/cart.css'
// widgets
import RangeInput from '../../widgets/RangeInput'
import SelectInput from '../../widgets/SelectInput'
import ButtonIconTwo from '../../widgets/ButtonIconTwo'
import ButtonTwo from '../../widgets/ButtonTwo'
// icons
import favourite from '../../icons/favourite-blue.svg'
// images
import sachet_water from '../../images/sachet-water.png'
// data
const type = [
    {
        "name": "Pack",
        "value": "pack"
    },
    {
        "name": "Single",
        "value": "single"
    }
]
const products = [
    {
        "image": sachet_water,
        "name": "Just water Pack (12 Pieces )",
        "price": 1000,
        "type": 2,
        "value": 3
    },
    {
        "image": sachet_water,
        "name": "Be Refreshed and cooled bottled water",
        "price": 1500,
        "type": 2,
        "value": 3
    }
]

const Cart = () => {
    return (
        <div className="cart">
            <div className="list">
                <div className="head">My Cart</div>
                <div className="item-container">
                    {products.map(item => {
                        return <div className="card" key={item.name}>
                                    <div className="image" style={{
                                        backgroundImage: `url(${item.image})`, 
                                        backgroundSize:`cover`
                                    }}></div>
                                    <div className="text">
                                        <Link className="link" to='/product-details'>
                                            <div className="name">{item.name}</div>
                                        </Link>
                                        <div className="price">₦{item.price}.00</div>
                                        <SelectInput 
                                            options={type}
                                            styling="half-input"
                                            border="no-border"
                                        />
                                        <RangeInput 
                                            styling="half-input"
                                        />
                                        <ButtonIconTwo
                                            text="Save for later"
                                            type="submit"
                                            styling="bg-white-border-primary"
                                            icon={favourite}
                                        />
                                    </div>
                                    <div className="close">
                                        &times;
                                    </div>
                                </div>
                    })}

                    <div className="sub-total mobile-alt">
                        <span>SUB-TOTAL:</span>
                        <span className="value">₦ 4000.00</span>
                    </div>
                </div>
            </div>
        
            <div className="total">
                <div className="head">Total</div>
                <div className="item">
                    <span className="title">Sub-total</span>
                    <span className="value">₦ 4000.00</span>
                </div>
                <div className="item">
                    <span className="title">Delivery</span>
                    <span className="value">&#9432;</span>
                </div>
                <Link className="link" to='/checkout'>
                    <ButtonTwo
                        text="Checkout"
                        styling="bg-primary full-input"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Cart
