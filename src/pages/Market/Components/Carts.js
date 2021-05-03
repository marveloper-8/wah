import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { updateCart, getCart } from "../../../redux/actions/user";
import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'
// widgets
import RangeInput from '../../../widgets/RangeInput'
import SelectInput from '../../../widgets/SelectInput'
import ButtonTwo from '../../../widgets/ButtonTwo'
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
    const [quantity, setQuantity] = useState(e.value.quantity)
    const id = e.value.product.id
    
    const cartFunction = () => {
        const infoData = {
            product_id: `${id}`,
            quantity: `${quantity}`
        };
        dispatch(updateCart(infoData))
    }
    console.log(e.value.product.id, quantity)
    
    // useEffect(() => {
    //     if(loading2 && update_cart.success && !update_cart.processing){
    //         setLoading(false)
    //         Swal.fire({
    //             position: 'top-end',
    //             icon: 'success',
    //             title: 'Success!',
    //             text: `${e.value.product.name} updated successfully`,
    //             showConfirmButton: false,
    //             timer: 3000
    //         })
    //         setLoading2(false)
    //         dispatch(getCart());
    //         // window.location.reload()
    //     } else if(loading2 && !update_cart.success && !update_cart.processing){
    //         setLoading(false)
    //         Swal.fire({
    //             position: 'top-end',
    //             icon: 'error',
    //             title: 'Error!',
    //             text: `${e.value.product.name} update unsuccessful`,
    //             showConfirmButton: false,
    //             timer: 3000
    //         })
    //         setLoading2(false)
    //         dispatch(getCart());
    //     } 
    // }, [update_cart, loading2, dispatch, e])

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
                increment={() =>  {
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
