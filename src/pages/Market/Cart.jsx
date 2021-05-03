import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCart } from "../../redux/actions/user";
import {Link} from 'react-router-dom'
// styling
import './style/cart.css'
// widgets
import ButtonTwo from '../../widgets/ButtonTwo'
import Navigation from '../../widgets/Navigation'
import Footer from '../../widgets/Footer'
import Carts from './Components/Carts'

const Cart = () => {
    const dispatch = useDispatch();
    const cart_details = useSelector(state => state.user.getCart.data)
    const cart_items = useSelector(state => state.user.getCart.data.cartItems)
    const cart_id = useSelector(state => state.user.getCart.data.cartItems)

    useEffect(() => {
      dispatch(getCart());
    }, [dispatch]);

    console.log(cart_items)

    return <>
        <Navigation />
        <div className="cart">
            <div className="list">
                <div className="head">My Cart</div>
                <div className="item-container">
                    {cart_items === undefined ? "Please wait..." : cart_items.map(item => <Carts value={item} />
                    )}

                    <div className="sub-total mobile-alt">
                        <span>SUB-TOTAL:</span>
                        <span className="value">{cart_details.price}</span>
                    </div>
                </div>
            </div>
        
            <div className="total">
                <div className="head">Total</div>
                <div className="item">
                    <span className="title">Sub-total</span>
                    <span className="value">{cart_details.price}</span>
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
       <Footer />
    </>
}

export default Cart
