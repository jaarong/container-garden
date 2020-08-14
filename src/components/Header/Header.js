import React from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
  <header className="bg-dark-green border-b">
    <a id="topofpage"></a>
    <div className="container mx-auto">
      <nav className="flex flex-col md:flex-row md:items-center justify-center md:justify-between md:flex-wrap md:p-1">
        <div className="flex justify-center md:flex-shrink-0 p-2">
            <div className="logo text-5xl pr-3"><FontAwesomeIcon icon={faSeedling} /></div>
            <div className="p-1">
              <Link className="text-2xl" activeClassName="text-2xl" to="/">{title}</Link>
              <p className="block">{subtitle}</p>
            </div>
        </div>
        <div className="flex-grow text-center md:text-right bg-leaf-green text-black md:bg-dark-green md:text-white">
          <Link className="inline-block p-2 hover:text-primary" activeClassName="inline-block p-2 text-primary" to="/">Home</Link>
          <Link className="inline-block p-2 hover:text-primary" activeClassName="inline-block p-2 text-primary" to="/pages/about">About</Link>
          <Link className="inline-block p-2 hover:text-primary" activeClassName="inline-block p-2 text-green-500" to="/pages/contacts">Contact</Link>
        </div>
      </nav>
    </div>
  </header>
  );
};

export default Header;