import React from 'react'
// styles
import './style/checkbox.css'

const CheckboxInput = ({value, name}) => {
    return <div className="checkbox-container">
                <input type="checkbox" className="checkbox" value={value} /> {name}
            </div>
}

export default CheckboxInput
