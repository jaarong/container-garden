// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { Mdx } from '../types';
import { MDXRenderer } from "gatsby-plugin-mdx"

type Props = {
  data: {
    mdx: Mdx
  }
};

const PageTemplate = ({ data }: Props) => {
  const { subtitle: siteSubtitle, logo: logo } = useSiteMetadata();
  const { body } = data.mdx;
  const { frontmatter } = data.mdx;
  const { title: pageTitle, description: pageDescription } = frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;
  const containerCss = "container mx-auto p-6 max-w-screen-md";
  const featureImage = logo;
  return (
    <Layout pageTitle={pageTitle} description={metaDescription} featureImage={featureImage} >
      <Page header={pageTitle} containerCss={containerCss}>
        <MDXRenderer>{body}</MDXRenderer>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx( slug: { eq: $slug } ) {
      id
      body
      slug
      frontmatter {
        title
        date
        description

      }
    }
  }
`;

export default PageTemplate;
