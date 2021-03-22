import React from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/favourites.css'
// widgets
import RangeInput from '../../widgets/RangeInput'
import SelectInput from '../../widgets/SelectInput'
import ButtonTwo from '../../widgets/ButtonTwo'
// icons
import delete_icon from '../../icons/delete.svg'
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

const Saved = () => {
    return (
        <div className="favourites">
            <div className="head">Saved Products</div>
            <div className="item-container">
                {products.map(item => {
                    return  <div className="card" key={item.value}>
                                <div className="image" style={{
                                    backgroundImage: `url(${item.image})`, 
                                    backgroundSize:`cover`
                                }}>
                                    <img src={delete_icon} alt="delete" />
                                </div>
                                <Link className="link" to='/product-details'>
                                    <div className="text">{item.value}</div>
                                    <div className="price">₦{item.price}.00</div>
                                </Link>
                                <SelectInput 
                                    options={type}
                                    styling="full-input"
                                />
                                <RangeInput 
                                    options={type}
                                    styling="full-input"
                                />
                                <ButtonTwo
                                    text="Show Less"
                                    type="submit"
                                    styling="bg-primary full-input"
                                />
                            </div>
                })}
            </div>
        </div>
    )
}

export default Saved
