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
  <div className="container mx-auto p-6 max-w-screen-lg">
    {edges.map((edge) => (
      <div class="mb-12 border-white border border-solid" key={edge.node.fields.slug}>
        <div className="flex flex-col-reverse md:flex-row justify-center flex-wrap">
          <div className="w-full md:w-3/5 p-6">
            <p>
              <time className="text-sm text-gray-400 font-light uppercase py-4" dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
                  {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
              </time>
              <span className="text-sm font-semibold uppercase pl-4 text-primary">
                  <Link to={edge.node.fields.categorySlug} className="">{edge.node.frontmatter.category}</Link>
              </span>
            </p>
            <h2 className="text-3xl my-2">
                <Link className="text-white" to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
            </h2>
            <p className="my-4">{edge.node.frontmatter.description}</p>
            <p className="mt-10"><Link className="border border-white text-lg rounded-lg p-3" to={edge.node.fields.slug}>Read More</Link></p>
          </div>
          <div className="w-full md:w-2/5">
            <Link to={edge.node.fields.slug}><img src={edge.node.frontmatter.featuredImage} /></Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Feed;