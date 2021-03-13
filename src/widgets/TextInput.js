import React from 'react'
// styles
import './style/input.css'

const TextInput = ({placeholder, label, type, styling, label_size}) => {
    return <div className={`text-input ${styling}`}>
            <div className="label" style={{fontSize: `${label_size}px`}}>{label}</div>
            <input 
                type={type}
                placeholder={placeholder}
            ></input>
        </div>
}

export default TextInput