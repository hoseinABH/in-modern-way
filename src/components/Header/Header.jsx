import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [open, setOpen] = useState(false);
  const [showInput, toggleShowInput] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [showInput]);
  const navigationLinks = [
    {
      id: 1,
      name: 'Now Playing',
      url: 'now_playing',
      color: 'text-pink-500',
    },
    {
      id: 2,
      name: 'Popular',
      url: 'popular',
      color: 'text-pink-400',
    },
    {
      id: 3,
      name: 'Top Rated',
      url: 'top_rated',
      color: 'text-purple-400',
    },
    {
      id: 4,
      name: 'Upcoming',
      url: 'upcoming',
      color: 'text-blue-400',
    },
  ];
  return (
    <div className="w-full bg-black fixed z-50 ">
      <div className="w-full  h-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-contain  ease-linear transition relative top-0"></div>
      <div className="flex py-4 items-center justify-between relative ">
        <div>
          <h2 className="px-3 text-sm  lg:text-xl  duration-500 font-bold hover:text-red-500">
            <Link to="/">
              <span
                role="img"
                aria-label="logo "
                className="pr-px text-md hidden md:inline-block"
              >
                🎬
              </span>
              Filminio
            </Link>
          </h2>
        </div>
        <div className="flex items-center pr-3 ">
          {open && (
            <svg
              onClick={() => setOpen(false)}
              className="fill-current stroke-current  inline-block h-6 w-6 z-50  cursor-pointer duration-500  hover:text-blue-500 right-0 top-0 bottom-0 fixed m-10"
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
                ? 'flex space-y-4 flex-col z-40 fixed bg-black h-screen overflow-hidden top-0 bottom-0 right-0 left-0 m-0 p-0  justify-center'
                : 'space-x-6  text-md  md:flex hidden'
            } font-semibold items-center `}
          >
            {navigationLinks.map((item) => (
              <li key={item.id} className={`hover:${item.color} duration-500`}>
                <Link
                  to={`/category/${item.url}`}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <form className="px-2 flex items-center">
            <input
              type="text"
              placeholder="Search for movie"
              autoComplete="off"
              onBlur={() => toggleShowInput(false)}
              ref={inputRef}
              className={`inline-block ${
                showInput ? '' : 'md:hidden'
              } rounded mx-auto bg-gray-600 px-2 py-1 outline-none text-sm w-full  text-gray-900  focus:bg-gray-200 delay-200`}
            />
            <svg
              onClick={() => {
                toggleShowInput(true);
              }}
              className={`fill-current stroke-current cursor-pointer hover:text-blue-500 duration-500  hidden ${
                showInput ? '' : 'md:inline-block'
              } h-5 w-5 `}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </form>
          <label
            onClick={() => setOpen(!open)}
            htmlFor="menu-toggle"
            className={`cursor-pointer  duration-500  hover:text-blue-500  block ${
              open ? '' : 'md:hidden'
            }`}
          >
            <svg
              className="fill-current pointer-events-none stroke-current  inline-block h-6 w-6"
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
