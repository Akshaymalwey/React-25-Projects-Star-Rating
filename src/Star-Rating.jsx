import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
function StarRating({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex)
  }

  function handleMouseLeave() {
    setHover(rating)
  }

  return (
    <div className="hero">
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size={50}
              className={index <= (hover || rating) ? 'active' : 'inactive'}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
