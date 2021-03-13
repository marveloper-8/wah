import React from 'react'
// styles
import './style/input.css'

const TextInputDouble = ({placeholder, label, type, styling}) => {
    return <div className="text-input text-input-double">
            <div className="label">{label}</div>
            <input 
                type={type}
                className={styling}
                placeholder={placeholder}
            ></input>
        </div>
}

export default TextInputDouble
