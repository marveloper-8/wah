import React, {useState} from 'react'
// styling
import './style/home.css'
// widgets
import ButtonArrow from '../widgets/ButtonArrow'
// icons
import logo_full_white from '../icons/logo-white-full.svg'
import logo_full from '../icons/logo-white.svg'
import logo from '../icons/logo-white.svg'
import menu from '../icons/menu-white.svg'
import user from '../icons/user-white.svg'
import favourite from '../icons/favourite-white.svg'
import cart from '../icons/cart-white.svg'
// illustrations
import choose from '../illustrations/choose-water.svg'
import order from '../illustrations/place-order.svg'
import receive from '../illustrations/receives-order.svg'
import deliver from '../illustrations/water-delivered.svg'
// images
import background from '../images/header-image.png'
import sachet_water from '../images/sachet-water.png'
import bottled_water from '../images/bottled-water.png'
import dispenser_water from '../images/dispenser-water.png'
import water_truck from '../images/water-truck.png'
import drinking from '../images/drinking.png'
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

function Home() {
    const [menu_container, openMenu] = useState(false)
    const [search_input, openSearch] = useState(false)
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
                        <span className="market">Marketplace</span>
                        <img src={user} alt="user" />
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
                    <div className="logo">
                        <img src={logo_full} alt="logo" />
                    </div>
                    
                    <div className="item" style={{border:`none`}}>
                        <div>Marketplace</div>
                    </div>

                    <div className="item">
                        <div>Profile</div>
                        <div><img src={user} alt="user" /></div>
                    </div>

                    <div className="item">
                        <div>Favourites</div>
                        <div><img src={favourite} alt="favourite" /></div>
                    </div>

                    <div className="item">
                        <div>Cart</div>
                        <div><img src={cart} alt="cart" /></div>
                    </div>
                </div>


                <h1>Getting water just got easier</h1>
                <p>Water Alliance is your online market place for water you need quickly.</p>
                <ButtonArrow
                    text="View Marketplace"
                    type="submit"
                    styling="bg-white"
                />
            </div>

            <div className="category">
                <h3>Shop by category</h3>

                <div className="list">
                    {categories.map(item => {
                        return <div className="item">
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
                    <h2>How it works</h2>
                    <div className="underline"></div>
                </div>
                
                <div className="list">
                    {how_it_works.map(item => {
                        return <div className="item">
                            <img src={item.image} alt={item.title} />
                            <h5>{item.title}</h5>
                            <div className="text">{item.text}</div>
                        </div>
                    })}
                </div>
            </div>

            <div className="info">
                <img src={drinking} alt="drinking" />
            </div>
            
        </div>
    )
}

export default Home
