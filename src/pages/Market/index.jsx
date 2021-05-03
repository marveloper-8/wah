import React, {useEffect, useState} from 'react'
// styling
import './style/market.css'
// widgets
import CheckboxInput from '../../widgets/CheckboxInput'
import TextInputNaira from '../../widgets/TextInputNaira'
import Navigation from '../../widgets/Navigation'
import Footer from '../../widgets/Footer'
import MarketItem from './Components/MarketItem'
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

const Market = e => {
    const [products, setProducts] = useState([])
    
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

    console.log(products)

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
                    {products.length < 1 
                        ? "There are currently no products for sale."
                        : products.map(item => {
                        return <MarketItem value={item} />
                    })}
                </div>
            </div>
        </div>
        <Footer />
    </>
}
export default Market
