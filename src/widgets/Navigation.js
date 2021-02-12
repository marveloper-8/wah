import React, {useState} from 'react'
// styling
import './style/navigation.css'
// icons
import logo_full from '../icons/logo-full.svg'
import logo from '../icons/logo.svg'
import menu from '../icons/menu.svg'
import search from '../icons/search.svg'
import user from '../icons/user.svg'
import favourite from '../icons/favourite.svg'
import cart from '../icons/cart.svg'

const Navigation = () => {
    const [menu_container, openMenu] = useState(false)
    const [search_input, openSearch] = useState(false)
    return (
        <>
            <div className="navigation nav-desktop">
                <div className="logo">
                    <img src={logo_full} alt="logo" />
                </div>

                <div>
                    <div className="input bg-primary-7">
                        <input type="search" placeholder="Search for a product" />
                        <img src={search} alt="search" />
                    </div>
                </div>

                <div className="extras">
                    <span className="market">Marketplace</span>
                    <img src={user} alt="user" />
                    <img src={favourite} alt="favourite" />
                    <img src={cart} alt="cart" />
                </div>
            </div>

            <div className="navigation nav-mobile">
                <div className="search">
                    <span onClick={() => openSearch(true)}>
                        <img src={search} alt="search" />
                    </span>
                </div>

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

            <div className={search_input ? "search-container nav-mobile" : "search-close search-container nav-mobile"}>
                <div className="input-container">
                    <div className="input bg-primary-7">
                        <input type="search" placeholder="Search for a product" />
                        <img src={search} alt="search" />
                    </div>
                </div>

                <div className="close">
                    <span onClick={() => openSearch(false)}>&times;</span>
                </div>
            </div>
        </>
    )
}

export default Navigation
