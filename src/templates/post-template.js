// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import Header from '../components/Header';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { title: postTitle, description: postDescription, socialImage } = frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImage} >
      <Header />
      <div className="m-3 max-w-screen-md mx-auto">
        <div className="container mx-auto p-6 max-w-screen-md">
          <Post post={data.markdownRemark} />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage
        featuredImage
      }
    }
  }
`;

export default PostTemplate;
