import React from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/market.css'
// widgets
import CheckboxInput from '../../widgets/CheckboxInput'
import TextInputNaira from '../../widgets/TextInputNaira'
// icon
import favourite from '../../icons/favourite-two.svg'
// images
import sachet_water from '../../images/sachet-water.png'
// data
const product_filter = [
    {
        "name": "Sachet Water",
        "value": "sachet"
    },
    {
        "name": "Bottle Water",
        "value": "bottle"
    },
    {
        "name": "Dispenser Water",
        "value": "dispenser"
    },
    {
        "name": "Tanker Water",
        "value": "tanker"
    },
]
const products = [
    {
        "image": sachet_water,
        "value": "Just water Pack (12 Pieces )",
        "price": 1000
    },
    {
        "image": sachet_water,
        "value": "Be Refreshed and cooled bottled water",
        "price": 1500
    },
    {
        "image": sachet_water,
        "value": "Afrities water Tank",
        "price": 2500
    },
    {
        "image": sachet_water,
        "value": "Just water Pack (12 Pieces )",
        "price": 1000
    },
    {
        "image": sachet_water,
        "value": "Just water Pack (12 Pieces )",
        "price": 1000
    },
    {
        "image": sachet_water,
        "value": "Be Refreshed and cooled bottled water",
        "price": 1500
    },
    {
        "image": sachet_water,
        "value": "Afrities water Tank",
        "price": 2500
    },
    {
        "image": sachet_water,
        "value": "Just water Pack (12 Pieces )",
        "price": 1000
    },
]

const Market = () => {
    return <div className="marketplace">
        <div className="filter">
            <div className="name head">Filter By:</div>
            <div className="product">
                <div className="head">Product</div>
                {product_filter.map(item => {
                    return <div className="item">
                        <CheckboxInput 
                            value={item.value}
                            name={item.name}
                            key={item.value}
                        />
                    </div>
                })}
            </div>
            <div className="price">
                <div className="head">Price Range</div>
                <div className="double-item">
                    <TextInputNaira
                        placeholder="Min"
                        type="number"
                        styling="bg-white"
                    />
                    <TextInputNaira
                        placeholder="Max"
                        type="number"
                        styling="bg-white"
                    />
                </div>
            </div>
        </div>
                
        <div className="products">
            <h5>All Products</h5>
            <div className="item-container">
                {products.map(item => {
                    return <Link className="link" to='/product-details'>
                            <div className="card" key={item.value}>
                                <div className="image" style={{
                                    backgroundImage: `url(${item.image})`, 
                                    backgroundSize:`cover`
                                }}>
                                    <img src={favourite} alt="favourite" />
                                </div>
                                <div className="text">{item.value}</div>
                                <div className="price">₦{item.price}.00</div>
                            </div>
                        </Link>
                })}
            </div>
                
        </div>
    </div>
}

export default Market
