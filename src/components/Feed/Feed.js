// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import Img from "gatsby-image";
import type { Edges } from '../../types';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className="mx-3">
    {edges.map((edge) => (
      <div className="mb-8 p-4 border-white border border-solid" key={edge.node.fields.slug}>
        <Link className="" to={edge.node.fields.slug}><img src={edge.node.frontmatter.featuredImage} /></Link>
        <div className="divide-x-2 divide-green-500 text-sm font-semibold mt-2">
          <time className="text-sm font-semibold uppercase pr-4" dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className="text-sm font-semibold uppercase pl-4 text-primary">
            <Link to={edge.node.fields.categorySlug} className="">{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className="text-3xl my-2">
          <Link className="text-white" to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className="">{edge.node.frontmatter.description}</p>
        <div className="my-2"><Link className="text-primary" to={edge.node.fields.slug}>Read</Link></div>
      </div>
    ))}
  </div>
);

export default Feed;
