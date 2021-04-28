import React from 'react'
// styles
import './style/button.css'

const Button = e => {
    return <button 
        type={e.type}
        className={e.styling}
        onClick={e.function}
        disabled={e.disabled}
    >{e.text}</button>
}

export default Button
