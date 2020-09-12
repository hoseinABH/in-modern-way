import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [open, setOpen] = useState(false);

  const navigationLinks = [
    {
      id: 1,
      name: 'Now Playing',
      url: '/now-playing',
      color: 'text-pink-500',
    },
    {
      id: 2,
      name: 'Popular',
      url: '/popular',
      color: 'text-pink-400',
    },
    {
      id: 3,
      name: 'Top Rated',
      url: '/top-rated',
      color: 'text-purple-400',
    },
    {
      id: 4,
      name: 'Upcoming',
      url: '/upcoming',
      color: 'text-blue-400',
    },
  ];
  return (
    <div className="w-full bg-transparent">
      <div className="w-full  h-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-contain  ease-linear transition fixed top-0"></div>
      <div className="flex py-4 items-center justify-between relative">
        <div>
          <h2 className="px-3 xs:text-sm  lg:text-xl  duration-500 font-bold hover:text-red-500">
            <Link to="/">
              <span role="img" aria-label="logo " className="pr-px text-lg">
                🎬
              </span>
              Filminio
            </Link>
          </h2>
        </div>
        <div className="flex items-center pr-3">
          {open && (
            <svg
              onClick={() => setOpen(false)}
              class="fill-current stroke-current  inline-block h-6 w-6 z-50  cursor-pointer duration-500  hover:text-blue-500 right-0 top-0 bottom-0 fixed m-10"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              <title>close</title>
            </svg>
          )}
          <ul
            className={`${
              open
                ? 'flex space-y-4 flex-col z-40 fixed bg-gray-800   h-screen overflow-hidden top-0 bottom-0 right-0 left-0 m-0 p-0  justify-center'
                : 'space-x-6  text-md  md:flex hidden'
            } font-semibold items-center `}
          >
            {navigationLinks.map((item) => (
              <li key={item.id} className={`hover:${item.color} duration-500`}>
                <Link to={item.url} onClick={() => setOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <form className="pr-1">
            <input
              type="text"
              placeholder="Search for movie"
              autoComplete="off"
              className=" rounded mx-5 bg-gray-600 px-2 py-1 outline-none text-sm  text-gray-900  focus:bg-gray-200 "
            />
          </form>
          <label
            onClick={() => setOpen(!open)}
            for="menu-toggle"
            class={`cursor-pointer duration-500  hover:text-blue-500  block ${
              open ? '' : 'md:hidden'
            }`}
          >
            <svg
              class="fill-current stroke-current  inline-block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
