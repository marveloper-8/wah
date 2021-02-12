import React from 'react'
// styles
import './style/footer.css'
// widgets
import ButtonFooter from './ButtonFooter'
// icons
import logo from '../icons/logo.svg'
import linkedin from '../icons/linkedin.svg'
import twitter from '../icons/twitter.svg'
import instagram from '../icons/instagram.svg'

function Footer() {
    return (
        <div className="footer bg-primary-7">
            <div className="content">
                <div className="item">
                    <img className="logo" src={logo} alt="logo" />
                </div>

                <div className="item">
                    <div className="head">Shop</div>
                    <ul>
                        <li>Sachet Water</li>
                        <li>Bottle Water</li>
                        <li>Dispenser Water</li>
                        <li>Tank Water</li>
                    </ul>
                </div>

                <div className="item">
                    <div className="head">Company</div>
                    <ul>
                        <li>About Us</li>
                        <li>Press</li>
                        <li>Become a vendor</li>
                    </ul>
                </div>

                <div className="item">
                    <div className="head">Support</div>
                    <ul>
                        <li>+234-453-4556-423</li>
                        <li>help@wateralliance.com</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className="item">
                    <div className="head">Follow Us</div>
                    <div className="socials">
                        <img 
                            src={linkedin} 
                            alt="linkedin" 
                        />
                        <img 
                            src={twitter} 
                            alt="twitter" 
                        />
                        <img 
                            src={instagram} 
                            alt="instagram" 
                        />
                    </div>
                </div>
            </div>
        
            <div className="subscribe">
                <div></div>
                <div className="form">
                    <div className="label">Subscribe for updates</div>
                    <div className="input">
                        <input type="email" placeholder='Your e-mail' />
                        <ButtonFooter
                            text="Subscribe"
                            type="submit"
                            styling="bg-primary"
                        />
                    </div>
                </div>
            </div>
        
            <div className="extras">
                <div className="item">Water Alliance</div>
                <div className="item">27, Palmfront Street, Ikeja, Lagos</div>
                <div className="item">2021, All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer
