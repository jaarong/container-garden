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
  const { subtitle: siteSubtitle, author:author, url: url } = useSiteMetadata();
  const { frontmatter } = data.mdx;
  const { title: title, description: postDescription, featuredImage } = frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;
  const featureImage = featuredImage != null ? featuredImage : author.photo;
  const containerCss = "container mx-auto p-6 max-w-screen-md";
  const canonicalUrl = url + "/" + data.mdx.slug;
  return (
    <Layout pageTitle={title} description={metaDescription} featureImage={featureImage} url={canonicalUrl} >
      <Post containerCss={containerCss} post={data.mdx} />
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
        featuredImage {
          alt
          src
          title
        }
      }
    }
  }
`;

export default PostTemplate;
