import React from 'react'
// styles
import './style/input.css'

const TextInput = e => {
    return <div className={`text-input ${e.styling}`}>
            <div className="label" style={{fontSize: `${e.label_size}px`}}>
                {e.label} &nbsp;
                {e.required 
                    ? <span className="required">*</span> 
                    : ''
                }
            </div>
            <input 
                type={e.type}
                placeholder={e.placeholder}
                value={e.value}
                onChange={e.onChange}
                name={e.name}
                required={e.required}
                disabled={e.disabled}
            ></input>
        </div>
}

export default TextInput