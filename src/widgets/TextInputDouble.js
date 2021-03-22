import React from 'react'
// styles
import './style/input.css'

const TextInputDouble = e => {
    return <div className="text-input text-input-double">
            <div className="label">{e.label} &nbsp;
                {e.required 
                    ? <span className="required">*</span> 
                    : ''
                }
            </div>
            <input 
                type={e.type}
                className={e.styling}
                placeholder={e.placeholder}
                value={e.value}
                onChange={e.onChange}
                name={e.name}
                required={e.required}
            />
        </div>
}

export default TextInputDouble
