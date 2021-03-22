import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getItems, deleteItem} from '../../redux/actions/itemActions'
import PropTypes from 'prop-types'
// styling
import './style/market.css'
// widgets
import CheckboxInput from '../../widgets/CheckboxInput'
import TextInputNaira from '../../widgets/TextInputNaira'
import Navigation from '../../widgets/Navigation'
import Footer from '../../widgets/Footer'
import favourite from '../../icons/favourite-two.svg'
// images
const product_filter = [
    {
        "name": "Sachet Water",
        "value": "sachet"
    },
    {
        "name": "Bottle Water",
        "value": "bottle"
    },
    {
        "name": "Dispenser Water",
        "value": "dispenser"
    },
    {
        "name": "Tanker Water",
        "value": "tanker"
    },
]

const Market = props => {
    // const [items, setItems] = useState([])

    // useEffect(() => {
    //     setItems(props.getItems())
    // }, [])

    const {products} = props.products

    console.log(props.products)

    console.log(products)

    const onDeleteClick = id => {
        props.deleteItem(id)
    }

    return <>
        <Navigation />
        <div className="marketplace">
            <div className="filter">
                <div className="name head">Filter By:</div>
                <div className="product">
                    <div className="head">Product</div>
                    {product_filter.map(item => {
                        return <div className="item">
                            <CheckboxInput 
                                value={item.value}
                                name={item.name}
                                key={item.value}
                            />
                        </div>
                    })}
                </div>
                <div className="price">
                    <div className="head">Price Range</div>
                    <div className="double-item">
                        <TextInputNaira
                            placeholder="Min"
                            type="number"
                            styling="bg-white"
                        />
                        <TextInputNaira
                            placeholder="Max"
                            type="number"
                            styling="bg-white"
                        />
                    </div>
                </div>
            </div>
                    
            <div className="products">
                <h5>All Products</h5>
                <div className="item-container">
                    {products.map(item => {
                        // <Link className="link" to='/product-details'></Link>
                        return <div className="card" key={item.id} onClick={() => onDeleteClick(item.id)}>
                            <div className="image" style={{
                                backgroundImage: `url(${item.image})`, 
                                backgroundSize:`cover`
                            }}>
                                <img 
                                    src={favourite} 
                                    alt="favourite" 
                                    
                                />
                            </div>
                            <div className="text">{item.value}</div>
                            <div className="price">₦{item.price}.00</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <Footer />
    </>
}

Market.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    products: state.product
})
export default connect(mapStateToProps, {getItems, deleteItem})(Market)
