import React, {useState} from 'react'
// styles
import './style/range.css'

const SelectInput = ({label, styling}) => {
    // constants
    let [unit, setUnit] = useState(1)
    // end of constants

    return <div className={`range-input ${styling}`}>
                <div className="label">{label}</div>
                <div className="inner">
                    <div className="increment" onClick={unit > 1 ? () => setUnit(unit--) : ''}>-</div>
                    <div className="value">{unit}</div>
                    <div className="decrement" onClick={() => setUnit(unit++)}>+</div>
                </div>
            </div>
}

export default SelectInput