import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/1.jpg';
import Rating from '../Rating/Rating';
const Card = () => {
  return (
    <Link to="/detail">
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95">
        <div
          class="flex items-end  justify-between h-64 w-full bg-cover"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <Rating />
          <h3 class="font-medium capitalize p-3">Classic watch</h3>
        </div>
        <div class=" flex items-start py-3 flex-col"></div>
      </div>
    </Link>
  );
};

export default Card;
