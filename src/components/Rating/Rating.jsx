import React, { useRef, useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating, totalStars, className }) => {
  const ratingRef = useRef();
  const [numberStars, setNumberStars] = useState();

  useEffect(() => {
    setNumberStars([...Array(totalStars).keys()].map((i) => i + 1));
    let percentage;
    if (rating < 5) {
      percentage = (rating / 5) * 100;
    } else {
      percentage = (rating / 10) * 100;
    }
    const starPercentageRounded = `${Math.floor(percentage)}%`;
    ratingRef.current.style.width = starPercentageRounded;
  }, [rating, totalStars]);

  return (
    <div className="flex">
      <div className={`flex relative text-gray-400 ${className}`}>
        {numberStars &&
          numberStars.map((i) => (
            <Fragment key={i}>
              <i aria-hidden="true">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </i>
            </Fragment>
          ))}

        <div
          className={`flex text-yellow-600 overflow-hidden absolute top-0 ${className}`}
          ref={ratingRef}
        >
          {numberStars &&
            numberStars.map((j) => (
              <Fragment key={j}>
                <i aria-hidden="true">
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </i>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
  totalStars: PropTypes.number,
  className: PropTypes.string,
};

export default Rating;
