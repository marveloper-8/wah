import React from 'react'
// styles
import './style/button.css'
// icons
import arrow from '../icons/arrow-right.svg'

const ButtonArrow = ({text, type, styling}) => {
    return <button 
                type={type}
                className={styling}
            >{text} <img src={arrow} alt="arrow" /></button>
}

export default ButtonArrow
