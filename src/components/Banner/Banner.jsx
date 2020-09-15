import React from 'react';

const Banner = ({ banner }) => {
  return (
    <header
      className="w-full relative"
      style={{
        background: `url(${banner})  no-repeat local center `,
        backgroundSize: 'cover',
        height: '92vh',
      }}
    >
      <div
        className="w-full bg-cover h-full absolute top-0 left-0 z-10 "
        style={{
          background: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <div className=" z-20 flex relative m-auto  mt-48 flex-col  justify-center text-center items-center w-full">
          <h1 className="text-4xl  lg:text-6xl font-bold">See what's next</h1>
          <p className=" text-xl lg:text-2xl font-semibold">
            Watch anywhere. Cancel Anytime
          </p>
          <button className="uppercase mt-4 bg-red-900 py-2 px-4 rounded font-semibold border-0 focus:outline-none hover:bg-opacity-75 ">
            watch free for 30 days
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
