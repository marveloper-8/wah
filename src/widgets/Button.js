import React from 'react'
// styles
import './style/button.css'

const Button = ({text, type, styling}) => {
    return <button 
                type={type}
                className={styling}
            >{text}</button>
}

export default Button
