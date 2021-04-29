import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { addCart, getCart } from "../../../redux/actions/user";
import {useDispatch, useSelector} from 'react-redux'
// widgets
import RangeInput from '../../../widgets/RangeInput'
import SelectInput from '../../../widgets/SelectInput'
import ButtonIconTwo from '../../../widgets/ButtonIconTwo'
// icons
import favourite from '../../../icons/favourite-blue.svg'
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

const Carts = e => {
    const dispatch = useDispatch();
    const add_cart = useSelector(state => state.user.addCart)

    const [loading2, setLoading2] = useState(false)
    const [quantity, setQuantity] = useState(e.value.quantity)
    
    const cartFunction = () => {
        const infoData = {
            product_id: `${e.value.quantity}`,
            quantity: `${quantity}`
        };
        dispatch(addCart(infoData))
        setLoading2(true)
    }
    
    useEffect(() => {
        if(loading2 && add_cart.success && !add_cart.processing){
            setLoading2(false)
            dispatch(getCart());
            // window.location.reload()
        } else if(loading2 && !add_cart.success && !add_cart.processing){
            setLoading2(false)
            dispatch(getCart());
        } 
    }, [add_cart, loading2, dispatch])
    return <div className="card" key={e.value.id}>
        <div className="image" style={{
            backgroundImage: `url(${e.value.product.images[0].image})`, 
            backgroundSize:`cover`
        }}></div>
        <div className="text">
            <Link className="link" to='/product-details'>
                <div className="name">{e.value.product.name}</div>
            </Link>
            <div className="price">{e.value.product.price}</div>
            <SelectInput 
                options={type}
                styling="half-input"
                border="no-border"
            />
            <RangeInput 
                styling="half-input"
                value={quantity}
                decrement={quantity > 1 ? () => {
                    setQuantity(quantity - 1) 
                    cartFunction()
                } : ''}
                increment={() => {
                    setQuantity(quantity + 1)
                    cartFunction()
                }}
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
}

export default Carts
