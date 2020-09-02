// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { Mdx } from '../types';

type Props = {
  data: {
    mdx: Mdx
  }
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.mdx;
  const { title: postTitle, description: postDescription, featuredImage } = frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} socialImage={featuredImage} >
      <div className="m-3 max-w-screen-md mx-auto">
        <div className="container mx-auto p-6 max-w-screen-md">
          <Post post={data.mdx} />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(slug: { eq: $slug } ) {
      id
      body
      slug
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        featuredImage
      }
    }
  }
`;

export default PostTemplate;
