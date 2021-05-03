import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addFavourite, getFavourite } from "../../../redux/actions/user";
import Swal from 'sweetalert2'
// icons
import favourite from '../../../icons/favourite-two.svg'

const MarketItem = e => {
    const dispatch = useDispatch();
    const add_favourite = useSelector(state => state.user.addFavourite)

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false)

    const id = `${e.value.id}`
    
    const favouriteFunction = e => {
        e.preventDefault()
        const infoData = {
            product_id: id
        };
        dispatch(addFavourite(infoData))
        setLoading(true)
        setLoading2(true)
    }
    
    useEffect(() => {
        if(loading2 && add_favourite.success && !add_favourite.processing){
            setLoading(false)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Success!',
                text: 'Saved successfully',
                showConfirmButton: false,
                timer: 3000
            })
            setLoading2(false)
            dispatch(getFavourite());
            // window.location.reload()
        } else if(loading2 && !add_favourite.success && !add_favourite.processing){
            setLoading(false)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error!',
                text: 'Save failed',
                showConfirmButton: false,
                timer: 3000
            })
            setLoading2(false)
            dispatch(getFavourite());
        } 
    }, [add_favourite, loading2, dispatch])

    return <div className="card" key={e.value.id}>
        <div className="image">
            <div className="background" 
            style={{
                backgroundImage: `url(${e.value.images[0].image})`, 
                backgroundSize:`cover`
            }}></div>
            <img 
                src={favourite} 
                alt="favourite"
                onClick={favouriteFunction} 
            />
        </div>
        <Link className="link" to={`/product-details/${e.value.id}`}>
            <div className="text">{e.value.category.name}</div>
            <div className="price">{e.value.price}</div>
        </Link>
    </div>
}

export default MarketItem
