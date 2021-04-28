import React from 'react'
// styles
import './style/input.css'

const TextInputNaira = e => {
    return <div className="text-input-naira">
            ₦ <input 
                type={e.type}
                className={e.styling}
                placeholder={e.placeholder}
                disabled={e.disabled}
            ></input>
        </div>
}

export default TextInputNaira
