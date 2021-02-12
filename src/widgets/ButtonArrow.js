import React from 'react'
// styles
import './style/button.css'
// icons
import arrow_icon from '../icons/arrow-right.svg'
import arrow_icon_white from '../icons/arrow-right-white.svg'

const ButtonArrow = ({arrow, text, type, styling}) => {
    return <button 
                type={type}
                className={styling}
            >
                {text} 
                <img src={arrow === "black" ? arrow_icon : arrow_icon_white} alt="arrow" />
            </button>
}

export default ButtonArrow
