import React from 'react'
// styling
import './style/home.css'
// icons
import logo_full from '../icons/logo-white-full.svg'
import logo from '../icons/logo-white.svg'
import menu from '../icons/menu-white.svg'
import search from '../icons/search.svg'
import user from '../icons/user.svg'
import favourite from '../icons/favourite.svg'
import cart from '../icons/cart.svg'

function Home() {
    return (
        <>
            <div className="header">
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
            </div>
        </>
    )
}

export default Home
