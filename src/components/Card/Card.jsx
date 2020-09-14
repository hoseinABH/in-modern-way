import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../service/movies.service';
import Rating from '../Rating/Rating';
const Card = ({ movie }) => {
  return (
    <Link to="/detail">
      <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95">
        <div
          className="flex items-end  justify-between h-64 w-full bg-cover"
          style={{
            backgroundImage: `url(${IMAGE_URL}/${movie.backdrop_path})`,
          }}
        >
          <h3 className="font-medium capitalize p-3">{movie.title}</h3>
        </div>
        <div className="pt-2 flex justify-between items-center">
          <Rating rating={movie.vote_average} totalStars={10} />
          &nbsp;&nbsp;
          <div className="grid-vote-average">{movie.vote_average}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
