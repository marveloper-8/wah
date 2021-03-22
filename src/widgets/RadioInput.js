import React from 'react'
// styles
import './style/input.css'

const RadioInput = ({input_size, text_size, label, name, position}) => {
    return <div className="radio-input">
                <input type="radio" 
                    name={name}
                    style={{height:`${input_size}px`, width:`${input_size}px`}} 
                />
                <span style={{fontSize:`${text_size}px`, bottom:`${position}px`}}>{label}</span>
            </div>
}

export default RadioInput