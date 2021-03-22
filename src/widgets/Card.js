import React from 'react'
// styles
import './style/cards.css'

const Card = ({text, image}) => {
    return <div className="card">
            <div className="image" style={{
                backgroundImage: `url(${image})`, 
                backgroundSize:`cover`
            }}></div>
            <div className="text">{text}</div>
    </div>
}

export default Card
