import React from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
  <header class="bg-dark-green border-b">
    <div class="container mx-auto">
      <nav class="flex flex-col md:flex-row md:items-center justify-center md:justify-between md:flex-wrap md:p-1">
        <div class="flex justify-center md:flex-shrink-0 p-2">
            <div class="logo text-5xl pr-3"><FontAwesomeIcon icon={faSeedling} /></div>
            <div class="p-1">
              <Link class="text-2xl" activeClassName="text-2xl" to="/">{title}</Link>
              <p class="block">{subtitle}</p>
            </div>
        </div>
        <div class="flex-grow text-center md:text-right bg-leaf-green text-black md:bg-dark-green md:text-white">
          <Link class="inline-block p-2 hover:text-green-500" activeClassName="inline-block p-2 text-green-500" to="/">Home</Link>
          <Link class="inline-block p-2 hover:text-green-500" activeClassName="inline-block p-2 text-green-500" to="/about">About</Link>
          <Link class="inline-block p-2 hover:text-green-500" activeClassName="inline-block p-2 text-green-500" to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  </header>
  );
};

export default Header;