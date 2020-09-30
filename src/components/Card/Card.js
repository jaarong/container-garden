// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import Img from "gatsby-image";
import type { Node } from '../../types';

type Props = {
  content: Node
};

const Card = ({ content }: Props) => (
<div className="max-w-sm rounded overflow-hidden shadow-lg my-2 bg-pine border-olivine border-2" key={content.fields.slug}>
    <Link to={content.fields.slug}><img className="w-full" src={content.frontmatter.featuredImage.src} alt={content.frontmatter.featuredImage.alt} /></Link>
    <div className="px-4 py-4">
        <h2 className="text-2xl my-2">
            <Link className="text-white" to={content.fields.slug}>{content.frontmatter.title}</Link>
        </h2>
        <p className="my-4">{content.frontmatter.description}</p>
    </div>
    <div className="px-6 py-4">
    <p>
        <time className="text-sm text-gray-400 font-light uppercase py-4" dateTime={moment(content.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(content.frontmatter.date).format('MMMM YYYY')}
        </time>
        <span className="text-sm font-semibold uppercase pl-4 text-primary">
            <Link to={content.fields.categorySlug} className="">{content.frontmatter.category}</Link>
        </span>
    </p>
    </div>
    <div className="px-6 py-4">
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
    </div>
</div>
);

export default Card;