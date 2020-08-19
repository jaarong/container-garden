// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import type { Node } from '../../types';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date, featuredImage } = post.frontmatter;

  return (
    <div className="post-start">

      <div className="">
        <Content body={html} title={title} banner={featuredImage} />
      </div>

      <div className="">
        <Meta date={date} />
        {tags && tagSlugs && <Tags className="border border-white text-lg rounded-lg p-3 my-4" tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className="text-sm">
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
      <div className="text-center my-6">
        <button title="Back to top" className="border border-white text-lg rounded-lg p-3 m-4" onClick={() => scrollTo('#topofpage')}><FontAwesomeIcon icon={ faChevronUp } /></button>
      </div>
    </div>
  );
};

export default Post;
