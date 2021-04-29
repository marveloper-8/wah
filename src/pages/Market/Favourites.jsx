import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getFavourite } from "../../redux/actions/user";
import {Link} from 'react-router-dom'
// styling
import './style/favourites.css'
// widgets
import Navigation from '../../widgets/Navigation'
import Footer from '../../widgets/Footer'
import FavouritesItem from './Components/FavouritesItem'
// images
import sachet_water from '../../images/sachet-water.png'
// data
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
    const dispatch = useDispatch();
    const cart_details = useSelector(state => state.user.getCart.data)
    const carts = useSelector(state => state.user.getFavourite.data.data)

    useEffect(() => {
      dispatch(getFavourite());
    }, [dispatch]);

    console.log(carts)

    return <>
        <Navigation />
        <div className="favourites">
            <div className="head">Saved Products</div>
            <div className="item-container">
                {carts === undefined 
                    ? <div className="cards">Please wait...</div> 
                    : carts.map(item => {
                        return  <FavouritesItem value={item.product} key={item.id} />
                    })
                }
            </div>
        </div>
        <Footer />
    </>
}

export default Saved
