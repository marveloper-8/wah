import React from 'react'
// styles
import './style/items.css'

const Card = ({title, text, image}) => {
    return <div className="card">
            <img src={image} alt="title" />
            <h5>{title}</h5>
            <div className="text">{text}</div>
    </div>
}

export default Card
