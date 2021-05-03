import React, {useState} from 'react'
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
// styling
import './style/home.css'
// widgets
import ButtonArrow from '../widgets/ButtonArrow'
import Footer from '../widgets/Footer'
// icons
import logo_full_white from '../icons/logo-white-full.svg'
import logo_full from '../icons/logo-full.svg'
import logo from '../icons/logo-white.svg'
import menu from '../icons/menu-white.svg'
import user from '../icons/user-white.svg'
import favourite from '../icons/favourite-white.svg'
import cart from '../icons/cart-white.svg'

import user_blue from '../icons/user.svg'
import favourite_blue from '../icons/favourite.svg'
import cart_blue from '../icons/cart.svg'
// illustrations
import choose from '../illustrations/choose-water.svg'
import order from '../illustrations/place-order.svg'
import receive from '../illustrations/receives-order.svg'
import deliver from '../illustrations/water-delivered.svg'
import play_store from '../illustrations/play-store.svg'
import app_store from '../illustrations/app-store.svg'
// images
import background from '../images/header-image.png'
import sachet_water from '../images/sachet-water.png'
import bottled_water from '../images/bottled-water.png'
import dispenser_water from '../images/dispenser-water.png'
import water_truck from '../images/water-truck.png'
import drinking from '../images/drinking.png'
import vendor from '../images/vendor.png'
import phone from '../images/phone.png'
// data
const categories = [
    {
        "image": sachet_water,
        "text": "Sachet Water"
    },
    {
        "image": bottled_water,
        "text": "Bottled Water"
    },
    {
        "image": dispenser_water,
        "text": "Dispenser Water"
    },
    {
        "image": water_truck,
        "text": "Water Truck"
    }
]
const how_it_works = [
    {
        "image": choose,
        "title": "Choose Water",
        "text": "Select the water you want e.g bottle water."
    },
    {
        "image": order,
        "title": "Place an order",
        "text": "Make an order of the water you have selected."
    },
    {
        "image": receive,
        "title": "Vendor receives order",
        "text": "Wait for a vendor to recieve and process your order."
    },
    {
        "image": deliver,
        "title": "Water is delivered to you",
        "text": "Water is deliverd to your delivery address."
    }
]

const Home = () => {
    const [menu_container, openMenu] = useState(false)
    return (
        <div className="home">
            <div className="header" style={{
                backgroundImage: `url(${background})`, 
                backgroundSize:`cover`
            }}>
                <div className="navigation-home nav-desktop">
                    <div className="logo">
                        <img src={logo_full_white} alt="logo" />
                    </div>

                    <div className="extras">
                        <Link className="link" to='/market'>
                            <span className="market">Marketplace</span>
                        </Link>
                        <Link className="link" to='/account'>
                            <img src={user} alt="user" />
                        </Link>
                        <img src={favourite} alt="favourite" />
                        <img src={cart} alt="cart" />
                    </div>
                </div>

                <div className="navigation-home nav-mobile">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="menu">
                        <span onClick={() => openMenu(true)}>
                            <img src={menu} alt="menu" />
                        </span>
                    </div>
                </div>

                <div className={menu_container ? "navigation-container nav-mobile" : "navigation-container-close navigation-container nav-mobile"}>
                    <div className="close">
                        <span onClick={() => openMenu(false)}>&times;</span>
                    </div>
                    <Link className="link" to='/' onClick={() => openMenu(false)}>
                    <div className="logo">
                        <img src={logo_full} alt="logo" />
                    </div>
                    </Link>
                    
                    <Link className="link" to='/market' onClick={() => openMenu(false)}>
                    <div className="item" style={{border:`none`}}>
                        <div>Marketplace</div>
                    </div>
                    </Link>

                    <Link className="link" to='/account' onClick={() => openMenu(false)}>
                    <div className="item">
                        <div>Profile</div>
                        <div><img src={user_blue} alt="user" /></div>
                    </div>
                    </Link>
                    
                    <Link className="link" to='/favourites' onClick={() => openMenu(false)}>
                    <div className="item">
                        <div>Favourites</div>
                        <div><img src={favourite_blue} alt="favourite" /></div>
                    </div>
                    </Link>
                    
                    <Link className="link" to='/cart' onClick={() => openMenu(false)}>
                    <div className="item">
                        <div>Cart</div>
                        <div><img src={cart_blue} alt="cart" /></div>
                    </div>
                    </Link>
                    
                </div>


                <h1>Getting water just got easier</h1>
                <p>Water Alliance is your online market place for water you need quickly.</p>
                <Link className="link" to='/market'>
                <ButtonArrow
                    text="View Marketplace"
                    type="submit"
                    styling="bg-white"
                    arrow="black"
                />
                </Link>
            </div>

            <div className="category">
                <h4>Shop by category</h4>

                <div className="list">
                    {categories.map(item => {
                        return <div className="item" key={item.text}>
                            <div className="background" style={{
                                backgroundImage: `url(${item.image})`, 
                                backgroundSize:`cover`
                            }}></div>
                            <div className="text">{item.text}</div>
                        </div>
                    })}
                </div>
            </div>

            <div className="how-it-works">
                <div className="title">
                    <h3>How it works</h3>
                    <div className="underline"></div>
                </div>
                
                <div className="list">
                    {how_it_works.map(item => {
                        return <div className="item" key={item.text}>
                            <img src={item.image} alt={item.title} />
                            <h5>{item.title}</h5>
                            <div className="text">{item.text}</div>
                        </div>
                    })}
                </div>
            </div>

            <div className="info">
                <img src={drinking} alt="drinking" />
                <h2>We believe water should be accessible to everyone no matter where they are</h2>
                <p>By creating a platform whereby water vendors can be connected to customers we are achieving that</p>
            </div>

            <div className="become-a-vendor">
                <div className="image" style={{
                    backgroundImage: `url(${vendor})`, 
                    backgroundSize:`cover`
                }}></div>

                <div className="text">
                    <h2>Become a Vendor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <ButtonArrow
                        text="Apply as a vendor"
                        type="submit"
                        styling="bg-primary"
                        arrow="white"
                    />
                </div>
            </div>

            <div className="download">
                <div className="text">
                    <p>With the water alliance app you can make your order seamlessly at anytime and anywhere.</p>
                    <h3 className="color-primary">Download the App on Google Play or the App Store.</h3>
                    <img src={play_store} alt="download on play store" className="play-store" />
                    <img src={app_store} alt="download on app store" />
                </div>

                <div className="image"><img src={phone} alt="download" /></div>
            </div>

            <Footer />
            
        </div>
    )
}

export default Home
