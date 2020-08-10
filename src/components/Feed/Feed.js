// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className="mx-3">
    {edges.map((edge) => (
      <div className="mb-8" key={edge.node.fields.slug}>
        <div className="divide-x-2 divide-green-500 text-sm font-semibold text-secondary">
          <time className="text-sm font-semibold uppercase pr-4" dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className="text-sm font-semibold uppercase pl-4">
            <Link to={edge.node.fields.categorySlug} className="">{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className="text-3xl my-2">
          <Link className="" to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className="">{edge.node.frontmatter.description}</p>
        <Link className="text-color-primary" to={edge.node.fields.slug}>Read</Link>
      </div>
    ))}
  </div>
);

export default Feed;
