import React, {useState} from 'react'
// components
import OrdersItem from './components/OrdersItem'
import OrdersDetails from './components/OrdersDetails'

const Orders = e => {
    // functions
    const [orders, setOrders] = useState(true)

    const Component = () => {
        if(orders){
            return <OrdersItem function={() => setOrders(false)} />
        } else{
            return <OrdersDetails function={() => setOrders(true)} />
        }
    }

    return <div className="orders-content">{Component()}</div>
}

export default Orders
