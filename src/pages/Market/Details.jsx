import React from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/details.css'
// widgets
import RangeInput from '../../widgets/RangeInput'
import SelectInput from '../../widgets/SelectInput'
import ButtonTwo from '../../widgets/ButtonTwo'
import StarRating from '../../widgets/StarRating'
// icons
import arrow_left from '../../icons/arrow-left.svg'
import favourite from '../../icons/favourite-three.svg'
// images
import sachet_water from '../../images/sachet-water.png'
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
const range_rating = [
    {
        "value": 10,
        "name": 5,
        "percent": 50
    },
    {
        "value": 15,
        "name": 4,
        "percent": 75
    },
    {
        "value": 8,
        "name": 3,
        "percent": 40
    },
    {
        "value": 8,
        "name": 2,
        "percent": 40
    },
    {
        "value": 0,
        "name": 1,
        "percent": 0
    }
]
const reviewers = [
    {
        "rating": 4,
        "timestamp": "7 days ago",
        "name": "Falimi Balogun",
        "title": "Awesome Service",
        "text": "Ordered my water, it came complete and quickly too. They also do a great job in creating a wonderful experience for their customers.",
        "person": "Verified Purchaser"
    },
    {
        "rating": 4,
        "timestamp": "7 days ago",
        "name": "Falimi Balogun",
        "title": "Awesome Service",
        "text": "Ordered my water, it came complete and quickly too. They also do a great job in creating a wonderful experience for their customers.",
        "person": "Verified Purchaser"
    },
    {
        "rating": 4,
        "timestamp": "7 days ago",
        "name": "Falimi Balogun",
        "title": "Awesome Service",
        "text": "Ordered my water, it came complete and quickly too. They also do a great job in creating a wonderful experience for their customers.",
        "person": "Verified Purchaser"
    },
]

const Details = () => {
    return (
        <div className="details">
            <div className="product">
                <div className="back color-primary">
                    <img src={arrow_left} alt="arrow" /> Back
                </div>

                <div className="info">
                    <div className="info-inner">
                        <div className="image" style={{
                            backgroundImage: `url(${sachet_water})`, 
                            backgroundSize:`cover`
                        }}></div>

                        <div className="text">
                            <div className="name">Just water Pack (12 Pieces )</div>
                            <div className="price">₦1,500.00</div>
                            <div className="ratings">
                                <StarRating 
                                    initialValue={4} 
                                    size={21}
                                /> &nbsp; 
                                <span className="number-of-reviews">4.0 (31 reviews)</span>
                            </div>
                            <div className="summary">Eva bottled water has been designed to be a perfect complement to everyday moments. It's grounded in providing pure, clean water in a sustainable way, that enlivens the body and mind. Eva bottled water has been designed to be a perfect complement to everyday moments. </div>
                            <SelectInput 
                                options={type}
                                label="Type"
                                styling="half-input"
                            />
                            <RangeInput 
                                label="Quantity"
                                styling="half-input"
                            />
                            <div className="actions">
                                <div>
                                    <ButtonTwo
                                        text="Add To Cart"
                                        type="submit"
                                        styling="bg-primary full-input"
                                    />
                                </div>
                                <div className="favourite">
                                    <img src={favourite} alt="favourite" />
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <div className="about">
                        <div className="item">
                            <div className="head">ABOUT VENDOR</div>
                            <p>Dominos Water Suppliers</p>
                            <p>Water, a substance composed of the chemical elements hydrogen and oxygen and existing in gaseous, liquid, and solid states. It is one of the most plentiful and essential of compounds. A tasteless and odourless liquid at room temperature, it has the important ability to dissolve many other substances.</p>
                        </div>
                        
                        <div className="item">
                            <div className="head">OPERATING DAYS</div>
                            <ul>
                                <li>
                                    <div>Monday</div>
                                    <div>10:00 AM - 9:00 PM</div>
                                </li>
                                <li>
                                    <div>Tuesday</div>
                                    <div>10:00 AM - 9:00 PM</div>
                                </li>
                                <li>
                                    <div>Wednesday</div>
                                    <div>10:00 AM - 9:00 PM</div>
                                </li>
                                <li>
                                    <div>Thursday</div>
                                    <div>10:00 AM - 9:00 PM</div>
                                </li>
                                <li>
                                    <div>Friday</div>
                                    <div>10:00 AM - 9:00 PM</div>
                                </li>
                                <li>
                                    <div>Saturday</div>
                                    <div>10:00 AM - 4:00 PM</div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="item">
                            <div className="head">ADDRESS</div>
                            <p>18, John Olugbo Street, Ikeja, Lagos.</p>
                        </div>
                    </div>    
                
                    <div className="show-about">
                        <ButtonTwo
                            text="Show Less"
                            type="submit"
                            styling="bg-white-border-primary third-input"
                        />
                    </div>
                </div>
            </div>
            
            <div className="product-review">
                <div></div>

                <div className="content">
                    <div className="section-head">REVIEWS</div>
                    <div className="reviews">
                        <div className="cummulative-review">
                            <StarRating 
                                initialValue={4} 
                                size={19}
                            /> &nbsp; 
                            <span className="value">4.0</span> &nbsp;
                            <span className="number-of-reviews">(31 reviews)</span>

                            <div className="range-rating">
                                {range_rating.map(item => {
                                    return <div className="item">
                                                <div className="name">{item.name} Stars</div>
                                                <div className="bar">
                                                    <div className="value bg-primary" style={{width:`${item.percent}%`}}></div>
                                                </div>
                                                <div className="number-of-reviews">({item.value} Reviews)</div>
                                            </div>
                                })}
                            </div>
                        </div>
                        
                        <div className="reviewers">
                            {reviewers.map(item => {
                                return <div className="item">
                                            <div className="extras">
                                                <div>
                                                    <StarRating 
                                                        initialValue={item.rating} 
                                                        size={14}
                                                    />
                                                </div>
                                                <div className="timestamp">
                                                    {item.timestamp}
                                                </div>
                                                <div className="name">
                                                    {item.name}
                                                </div>
                                            </div>
                                            <b>{item.title}</b>
                                            <p>{item.text}</p>
                                            <div className="person">{item.person}</div>
                                        </div>
                            })}
                            <div className="see-all color-primary">See All</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="similar-products">
                <div></div>

                <div className="content">
                    <div className="section-head">SIMILAR PRODUCTS</div>
                    <div className="item-container">
                        {products.map(item => {
                            return <div className="card" key={item.value}>
                                        <div className="image" style={{
                                            backgroundImage: `url(${item.image})`, 
                                            backgroundSize:`cover`
                                        }}>
                                            <img src={favourite} alt="favourite" />
                                        </div>
                                        <Link className="link" to='/product-details'>
                                            <div className="text">{item.value}</div>
                                            <div className="price">₦{item.price}.00</div>
                                        </Link>
                                    </div>
                        })}
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Details
