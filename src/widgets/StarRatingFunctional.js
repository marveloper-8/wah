import React, {useState} from 'react'
// styling
import './style/star.css'
// component
const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const StarRating = ({ initialValue }) => {
  const [starsSelected, selectStar] = useState(initialValue);
  return (
    <div className="star-rating">
      {[...Array(5)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => selectStar(i + 1)}
        /> 
      ))} <span className="value">{starsSelected}.0</span>
    </div>
  );
};

export default StarRating
