import React from 'react';
import Card from '../Card/Card';

const Grid = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 25];
  return (
    <main class="my-8">
      <h3 class="font-medium box-content text-md sm:text-2xl ">Now Playing</h3>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {images.map((item) => (
          <Card />
        ))}
      </div>
    </main>
  );
};

export default Grid;
