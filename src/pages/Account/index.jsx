import React, {useState} from 'react'
import {connect} from 'react-redux'
import { useSelector } from "react-redux";
import {logout} from '../../redux/actions/actionsAuth'
import PropTypes from 'prop-types'
// styling
import './style/account.css'
// icon
import profile_icon from '../../icons/profile.svg'
import orders_icon from '../../icons/orders.svg'
import address_icon from '../../icons/address.svg'
import payment_icon from '../../icons/payment.svg'
import contact_icon from '../../icons/contact.svg'
import help_icon from '../../icons/help.svg'
import signout_icon from '../../icons/signout.svg'
// images
import sachet_water from '../../images/sachet-water.png'
// Widgets
import Navigation from '../../widgets/Navigation'
// components
import Profile from './Profile'
import Orders from './Orders'
import Address from './Address'
import Payment from './Payment'

const Account = props => {
    const user = useSelector((state) => state.auth.data.user);

    // functions
    const [functions, setFunctions] = useState({
        profile_page: true,
        orders_page: false,
        address_page: false,
        payment_page: false
    })
    
    console.log(localStorage.getItem('token'))


    const propTypes = {
        logout:PropTypes.func.isRequired
    }

    const Component = () => {
        if(functions.profile_page){
            return <Profile />
        } else if(functions.orders_page){
            return <Orders />
        } else if(functions.address_page){
            return <Address />
        } else if(functions.payment_page){
            return <Payment />
        }
    }

    return <>
        <Navigation />
        <div className="account">
            <div className="account-navigation">
                <section>
                    <div className="profile-item">
                        <div className="image-container">
                            <div className="image" style={{
                                backgroundImage: `url(${sachet_water})`, 
                                backgroundSize:`cover`
                            }} />
                        </div>
                        <div className="text">
                            <div className="active">{user.name}</div>
                            <div className="small">{user.email}</div>
                        </div>
                    </div>
                </section>
                <section className="first-navigation">
                    <div className={functions.profile_page ? "item active-item" : "item"} onClick={() => setFunctions({
                        profile_page: true,
                        orders_page: false,
                        address_page: false,
                        payment_page: false
                    })}>
                        <div className="icon">
                            <img src={profile_icon} alt="profile" />
                        </div>
                        <div className="text desktop tablet">My Profile</div>
                    </div>
                    <div className={functions.orders_page ? "item active-item" : "item"} onClick={() => setFunctions({
                        profile_page: false,
                        orders_page: true,
                        address_page: false,
                        payment_page: false
                    })}>
                        <div className="icon">
                            <img src={orders_icon} alt="orders" />
                        </div>
                        <div className="text desktop tablet">My Orders</div>
                    </div>
                    <div className={functions.address_page ? "item active-item" : "item"} onClick={() => setFunctions({
                        profile_page: false,
                        orders_page: false,
                        address_page: true,
                        payment_page: false
                    })}>
                        <div className="icon">
                            <img src={address_icon} alt="orders" />
                        </div>
                        <div className="text desktop tablet">Address Details</div>
                    </div>
                    <div className={functions.payment_page ? "item last-item active-item" : "item last-item"} onClick={() => setFunctions({
                        profile_page: false,
                        orders_page: false,
                        address_page: false,
                        payment_page: true
                    })}>
                        <div className="icon">
                            <img src={payment_icon} alt="payment" />
                        </div>
                        <div className="text desktop tablet">Payment Methods</div>
                    </div>
                </section>
                <div className="mobile-space">
                    <section className="second-navigation">
                        <div className="item">
                            <div className="icon">
                                <img src={contact_icon} alt="profile" />
                            </div>
                            <div className="text desktop tablet">Contact Us</div>
                        </div>
                        <div className="item last-item">
                            <div className="icon">
                                <img src={help_icon} alt="payment" />
                            </div>
                            <div className="text desktop tablet">Help</div>
                        </div>
                    </section>
                    <div></div>
                    <section className="third-navigation">
                        <div className="item last-item signout" onClick={props.logout}>
                            <div className="icon">
                                <img src={signout_icon} alt="payment" />
                            </div>
                            <div className="text desktop tablet">Sign Out</div>
                        </div>
                    </section>
                </div>
            </div>
            
            <div className="account-content">
                {Component()}
            </div>
    </div>
    </>
}

export default connect(
    null,
    {logout}
)(Account)