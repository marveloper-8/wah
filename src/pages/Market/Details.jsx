import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addCart } from "../../redux/actions/user";
import Swal from 'sweetalert2'
// styling
import './style/details.css'
// widgets
import RangeInput from '../../widgets/RangeInput'
import SelectInput from '../../widgets/SelectInput'
import ButtonTwo from '../../widgets/ButtonTwo'
import StarRating from '../../widgets/StarRating'
import Navigation from '../../widgets/Navigation'
import Footer from '../../widgets/Footer'
// icons
import arrow_left from '../../icons/arrow-left.svg'
import favourite from '../../icons/favourite-three.svg'
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
    const {id} = useParams()

    const dispatch = useDispatch();
    const add_cart = useSelector(state => state.user.addCart)

    const [postDetails, setPostDetails] = useState([])
    const [vendorDetails, setVendorDetails] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`https://wah20.prodevs.io/api/product/details?product_id=${id}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setPostDetails(result.data)
            })
    }, [id])

    useEffect(() => {
        fetch(`https://wah20.prodevs.io/api/product/vendor-details?vendor_id=${postDetails.vendor === undefined ? "" : postDetails.vendor.id}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setVendorDetails(result.data)
            })
    }, [postDetails])
    
    useEffect(()=>{
        fetch('https://wah20.prodevs.io/api/product/search', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setProducts(result.data.data)
            })
    },[])

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false)
    const [quantity, setQuantity] = useState(1)

    console.log(`${quantity}`, id)
    
    const cartFunction = e => {
        e.preventDefault()
        const infoData = {
            product_id: id,
            quantity: `${quantity}`
        };
        dispatch(addCart(infoData))
        setLoading(true)
        setLoading2(true)
    }
    
    useEffect(() => {
        if(loading2 && add_cart.success && !add_cart.processing){
            setLoading(false)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Success!',
                text: 'Added to cart successfully',
                showConfirmButton: false,
                timer: 3000
            })
            setLoading2(false)
            // window.location.reload()
        } else if(loading2 && !add_cart.success && !add_cart.processing){
            setLoading(false)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error!',
                text: 'Add to cart failed',
                showConfirmButton: false,
                timer: 3000
            })
            setLoading2(false)
        } 
    }, [add_cart, loading2])

    return <>
        <Navigation />
        <div className="details">
            <div className="product">
                <div className="back color-primary">
                    <span onClick={() => window.history.back()}>
                        <img src={arrow_left} alt="arrow" /> Back
                    </span>
                </div>

                <div className="info">
                    <div className="info-inner">
                        <div className="image" style={{
                            backgroundImage: `url(${postDetails.images === undefined ? "" : postDetails.images[0].image})`,
                            // backgroundImage: `url(${sachet_water})`, 
                            backgroundSize:`cover`
                        }}></div>

                        <div className="text">
                            <div className="name">
                                {postDetails.brand}, {postDetails.category === undefined ? "" : postDetails.category.name}</div>
                            <div className="price">{postDetails.price}</div>
                            <div className="ratings">
                                <StarRating 
                                    initialValue={postDetails.average_rating} 
                                    size={21}
                                /> &nbsp; 
                                <span className="number-of-reviews">{postDetails.average_rating}.0 ({postDetails.total_reviews} reviews)</span>
                            </div>
                            <div className="summary">{postDetails.description}</div>
                            <SelectInput 
                                options={type}
                                label="Type"
                                styling="half-input"
                            />
                            <RangeInput 
                                label="Quantity"
                                styling="half-input"
                                value={quantity}
                                decrement={() => quantity > 1 ? setQuantity(quantity - 1) : ''}
                                increment={() => setQuantity(quantity + 1)}
                            />
                            <div className="actions">
                                <div>
                                    <a onClick={cartFunction}>
                                        <ButtonTwo
                                            text={loading ? "Please Wait..." : "Add to Cart"}
                                            type="submit"
                                            styling="bg-primary full-input"
                                            disabled={loading ? true : false}
                                        />
                                    </a>
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
                            <p>{vendorDetails === undefined ? "Loading..." : vendorDetails.name}</p>
                            <p>{vendorDetails === undefined ? "Loading..." : vendorDetails.b_description}</p>
                        </div>
                        
                        <div className="item">
                            <div className="head">OPERATING DAYS</div>
                            <ul>
                                <li>
                                    <div>Monday</div>
                                    <div>{vendorDetails === undefined ? "Loading..." : vendorDetails.operating_days === undefined ? "" : vendorDetails.operating_days.monday.start_time} - {vendorDetails === undefined ? "Loading..." : vendorDetails.operating_days === undefined ? "" : vendorDetails.operating_days.monday.stop_time}</div>
                                </li>
                                <li>
                                    <div>Tuesday</div>
                                    <div>{vendorDetails === undefined ? "Loading..." : vendorDetails.operating_days === undefined ? "" : vendorDetails.operating_days.tuesday.start_time} - {vendorDetails === undefined ? "Loading..." : vendorDetails.operating_days === undefined ? "" : vendorDetails.operating_days.tuesday.stop_time}</div>
                                </li>
                                <li>
                                    <div>Wednesday</div>
                                    <div>{vendorDetails === undefined ? "Loading..." : vendorDetails.operating_days === undefined ? "" : vendorDetails.operating_days.wednesday.start_time} - {vendorDetails === undefined ? "Loading..." : vendorDetails.operating_days === undefined ? "" : vendorDetails.operating_days.wednesday.stop_time}</div>
                                </li>
                                <li>
                                    <div>Thursday</div>
                                    <div>{vendorDetails === undefined ? "Loading..." : vendorDetails.operating_days === undefined ? "" : vendorDetails.operating_days.thursday.start_time} - {vendorDetails === undefined ? "Loading..." : vendorDetails.operating_days === undefined ? "" : vendorDetails.operating_days.thursday.stop_time}</div>
                                </li>
                                <li>
                                    <div>Friday</div>
                                    <div>{vendorDetails === undefined ? "Loading..." : vendorDetails.operating_days === undefined ? "" : vendorDetails.operating_days.friday.start_time} - {vendorDetails === undefined ? "Loading..." : vendorDetails.operating_days === undefined ? "" : vendorDetails.operating_days.friday.stop_time}</div>
                                </li>
                                <li>
                                    <div>Saturday</div>
                                    <div>{vendorDetails === undefined ? "Loading..." : vendorDetails.operating_days === undefined ? "" : vendorDetails.operating_days.saturday.start_time} - {vendorDetails === undefined ? "Loading..." : vendorDetails.operating_days === undefined ? "" : vendorDetails.operating_days.saturday.stop_time}</div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="item">
                            <div className="head">ADDRESS</div>
                            <p>{vendorDetails === undefined ? "Loading..." : vendorDetails.business_address}</p>
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
                        {products.filter(item => item.id !== id).slice(0, 4).map(item => {
                            return <Link className="link" to={`/product-details/${item.id}`}>
                                <div className="card" key={item.id}>
                                    <div className="image" style={{
                                        backgroundImage: `url(${item.images[0].image})`, 
                                        backgroundSize:`cover`
                                    }}>
                                        <img src={favourite} alt="favourite" />
                                    </div>
                                    <Link className="link" to='/product-details'>
                                        <div className="text">{item.category.name}</div>
                                        <div className="price">{item.price}</div>
                                    </Link>
                                </div>
                            </Link>
                        })}
                    </div>
                </div> 
            </div>
        </div>
        <Footer />
    </>
}

export default Details
