import React from 'react'
import {Link} from 'react-router-dom'
// widgets
import RangeInput from '../../../widgets/RangeInput'
import SelectInput from '../../../widgets/SelectInput'
import ButtonTwo from '../../../widgets/ButtonTwo'
// icons
import delete_icon from '../../../icons/delete.svg'
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

const FavouritesItem = e => {
    return <div className="card">
        <div className="image" style={{
            backgroundImage: `url(${e.value.images[0].image})`, 
            backgroundSize:`cover`
        }}>
            <img src={delete_icon} alt="delete" />
        </div>
        <Link className="link" to='/product-details'>
            <div className="text">{e.value.name}</div>
            <div className="price">{e.value.price}</div>
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
            text="Add to cart"
            type="submit"
            styling="bg-primary full-input"
        />
    </div>
}

export default FavouritesItem
