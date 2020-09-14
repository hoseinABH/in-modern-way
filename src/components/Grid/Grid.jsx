import React from 'react';
import Card from '../Card/Card';

const Grid = ({ movies, title }) => {
  return (
    <main className="my-8">
      <h3 className="font-medium box-content text-md sm:text-2xl ">{title}</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {movies && movies.map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    </main>
  );
};

export default Grid;
