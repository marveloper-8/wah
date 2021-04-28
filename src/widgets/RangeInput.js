import React from 'react'
// styles
import './style/range.css'

const SelectInput = e => {
    return <div className={`range-input ${e.styling}`}>
                <div className="label">{e.label}</div>
                <div className="inner">
                    <div className="decrement" onClick={e.decrement}>-</div>
                    <div className="value">{e.value}</div>
                    <div className="increment" onClick={e.increment}>+</div>
                </div>
            </div>
}

export default SelectInput