import React from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import TransitionLink from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import kebabCase from 'lodash/kebabCase';
import { useCategoriesList } from '../../hooks';

const Header = () => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();

  return (
  <header className="bg-pine border-b">
    <a id="topofpage"></a>
    <div className="container mx-auto">
      <nav className="flex flex-col md:flex-row md:items-center justify-center md:justify-between md:flex-wrap md:p-1">
        <div className="flex justify-center md:flex-shrink-0 p-2">
          <Zoom>
            <div className="logo text-5xl pr-3"><Link className="text-dark" to="/"><FontAwesomeIcon icon={faSeedling} /></Link></div>
            <div className="p-1">
              <Link className="text-2xl" activeClassName="text-2xl" to="/">{title}</Link>
              <p className="block text-lg">{subtitle}</p>
            </div>
          </Zoom>
        </div>
        <div className="flex-grow text-center md:text-right bg-leaf-green text-lg md:bg-dark-green md:text-white">
         <AniLink paintDrip hex="#A1C181" className="inline-block p-2 hover:text-dark" activeClassName="inline-block p-2 text-dark" to="/">Home</AniLink>
         <AniLink paintDrip hex="#A1C181" className="inline-block p-2 hover:text-dark" activeClassName="inline-block p-2 text-dark" to="/pages/about/">About</AniLink>
         <AniLink paintDrip hex="#A1C181" className="inline-block p-2 hover:text-dark" activeClassName="inline-block p-2 text-dark" to="/contact-us/">Contact</AniLink>
         <div class="group inline-block relative">
            <button class="block p-2 hover:text-dark" href="#">Categories&nbsp;<FontAwesomeIcon className="pt-1" icon={faChevronDown} /></button>
            <div class="absolute bg-pine text-base w-full hidden rounded overflow-hidden group-hover:block">
            {categories.map((category) => (
              <AniLink paintDrip hex="#A1C181" class="inline-block p-2 text-white hover:bg-charcoal w-full" activeClassName="inline-block p-2 text-green-500" key={category.fieldValue} to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </AniLink>
            ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  );
};

export default Header;