// @flow strict
import React from 'react';
import { Link } from 'gatsby';

type Props = {
  tags: string[],
  tagSlugs: string[]
};

const Tags = ({ tags, tagSlugs }: Props) => (
  <div className="">
    <ul className="list-none my-4">
      {tagSlugs && tagSlugs.map((slug, i) => (
        <li className="border border-white rounded p-3 my-2 mr-4 inline-block hover:text-primary hover:border-pine" key={tags[i]}>
          <Link to={slug} className="">
            {tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
