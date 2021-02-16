// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { useCategoriesList } from '../../hooks';


const CategoryNav = () => {

    const categories = useCategoriesList();

    return (
        <div className="container mx-auto p-6 max-w-screen-xl">
            <nav className="flex flex-row">
                <label>Filter:</label>
                {categories.map((category) => (
                    <li className="rounded-full px-4 mr-2 bg-sunglow text-charcoal p-2 rounded leading-none flex items-center" key={category.fieldValue}>
                    <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                        {category.fieldValue} ({category.totalCount})
                    </Link>
                    </li>
                ))}
            </nav>
        </div>
    );
};

export default CategoryNav;