import React, {useState} from 'react'
// components
import PaymentAdd from './components/PaymentAdd'
import PaymentInfo from './components/PaymentInfo'
import PaymentNull from './components/PaymentNull'

const Payment = () => {
    // functions
    const [payment, setPayment] = useState({
        payment_info: true,
        payment_add: false,
        // payment_null: true
    })

    const Component = () => {
        if(payment.payment_add){
            return <PaymentAdd function={() => setPayment({
                payment_add: false,
                payment_info: true,
                payment_null: false
            })} />
        }else if(payment.payment_info){
            return <PaymentInfo function={() => setPayment({
                payment_add: true,
                payment_info: false,
                payment_null: false
            })} />
        }
    }

    return <>{Component()}</>
}

export default Payment
