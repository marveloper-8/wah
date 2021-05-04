import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getBank } from "../../../redux/actions/user";
import {Link} from 'react-router-dom'
// widgets
import ButtonTwo from '../../../widgets/ButtonTwo'
// icons
import mastercard from '../../../icons/mastercard.svg'

const PaymentInfo = e => {
    const dispatch = useDispatch();
    const bank_details = useSelector(state => state.user.getBank.data)

    useEffect(() => {
      dispatch(getBank());
    }, [dispatch]);

    console.log(bank_details)

    return <>
        <section className="double-section">
            <span className="head-two">Payment Methods</span>
            <span onClick={e.function}>
                <ButtonTwo
                    text="Add New Credit/Debit Card"
                    styling="bg-primary"
                />
            </span>
        </section>
        <section className="section-two">
            <section className="inner">
                <div className="double-item">
                    <div className="card-details">
                        <div className="logo">
                            <img src={mastercard} alt="mastercard" />
                        </div>
                        <div>
                            <div className="card-details-item">Master Card Debit (5432)</div>
                            <div className="card-details-item">02 / 2023</div>
                            <div className="card-details-item">{bank_details.bank_account_name}</div>
                        </div>
                    </div>
                    <div className="right">
                        <span onClick={e.function}>
                            <ButtonTwo
                                text="Delete"
                                styling="border-grey half-input"
                                label_size={16}
                            />
                        </span>
                    </div>
                </div>
                <div className="default small">Default Payment Method</div>
            </section>
        </section>
    </>
}

export default PaymentInfo
