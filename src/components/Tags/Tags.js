// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

type Props = {
  tags: string[],
  tagSlugs: string[]
};

const Tags = ({ tags, tagSlugs }: Props) => (
  <div className="">
    <ul className="list-none my-4">
      {tagSlugs && tagSlugs.map((slug, i) => (
        <li className="inline-block rounded-full px-3 py-1 text-sm font-semibold hover:text-primary hover:border-pine" key={tags[i]}>
          <Link to={slug} className="">
          <FontAwesomeIcon className="text-xs" icon={ faHashtag } />{tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;