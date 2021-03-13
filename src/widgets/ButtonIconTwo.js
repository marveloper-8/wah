import React from 'react'
// styles
import './style/button.css'

const ButtonIconTwo = ({icon, text, type, styling}) => {
    return <button 
                type={type}
                className={`button-icon-two ${styling}`}
            >
                <img src={icon} alt="icon" />
                {text} 
            </button>
}

export default ButtonIconTwo
