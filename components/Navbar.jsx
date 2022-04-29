import Link from 'next/link';
import { useState } from 'react';
const headingStyles = {
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1030,
};

function Nav() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav
        className="flex flex-wrap items-center p-1 bg-emerald-600 "
        style={headingStyles}
      >
        <button
          className="inline-flex p-3 text-black rounded outline-none hover:bg-gray-500 lg:hidden hover:text-white"
          aria-label="Left Align"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          } justify-around  w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="flex flex-col items-start justify-around w-full lg:flex-row lg:items-center lg:h-auto">
            <Link href="/">
              <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-teal-600 hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-teal-600 hover:text-white">
                Services
              </a>
            </Link>
            <Link href="/">
              <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-teal-600 hover:text-white">
                About us
              </a>
            </Link>
            <Link href="/">
              <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-teal-600 hover:text-white">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;