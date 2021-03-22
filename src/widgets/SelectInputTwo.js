import React from 'react'
// styles
import './style/select.css'

const SelectInput = ({options, label, styling, border, label_size}) => {
    return <div className={`select-input-two ${styling}`}>
                <div className="label" style={{fontSize: `${label_size}px`}}>{label}</div>
                <select className={border}>
                    {
                        options.map(item => {
                            return (
                                <option 
                                    key={item.value} 
                                    value={item.value}
                                >
                                    {item.name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
}

export default SelectInput
