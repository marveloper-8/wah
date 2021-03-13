import React from 'react'
// styles
import './style/select.css'

const SelectInput = ({options, label, styling, border}) => {
    return <div className={`select-input ${styling}`}>
                <div className="label">{label}</div>
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
