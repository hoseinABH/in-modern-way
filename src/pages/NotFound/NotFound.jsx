import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/not.jpg';
const NotFound = () => {
  return (
    <div
      className="h-screen w-full flex items-center"
      style={{
        background: `url(${banner})  no-repeat local center`,
        backgroundSize: 'cover',
        height: '92vh',
      }}
    >
      <div
        className="h-screen w-full flex items-center"
        style={{
          background: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-center px-5">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <Link
              to="/"
              className="px-4 inline py-2 text-sm font-semibold leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded focus:outline-none focus:shadow-outline-blue bg-red-900 active:bg-red-900 hover:opacity-75"
            >
              back to homepage
            </Link>
          </div>
          <div className="max-w-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
