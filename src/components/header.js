import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-yellow ">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-black">
          <svg
            className="fill-current h-8 mr-2 w-8"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M185 190 c71 -72 131 -130 132 -130 2 0 3 58 3 130 l0 130 -132 0
            -133 0 130 -130z"/>
            <path d="M0 110 l0 -110 112 0 113 0 -110 110 c-60 61 -111 110 -112 110 -2 0
            -3 -49 -3 -110z"/>
            </g>
          </svg>

          <span className="font-bold text-xl tracking-tight">{siteTitle}</span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-black"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div className={`${isExpanded ? `block` : `hidden`} md:block md:flex md:items-center w-full md:w-auto`}>
          <div className="text-sm">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black"
            >
              Home
          </Link>

            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
            >
              About
          </Link>

            <Link
              to="/contact"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-black"
            >
              Contact
          </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
