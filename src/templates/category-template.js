// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMdx } from '../types';

type Props = {
  data: AllMdx,
  pageContext: PageContext
};

const CategoryTemplate = ({ data, pageContext }: Props) => {
  const { subtitle: siteSubtitle, logo: logo, url: url } = useSiteMetadata();
  const featureImage = logo;
  const containerCss = "container mx-auto p-6 max-w-screen-lg";
  const {
    category,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const { edges } = data.allMdx;
  const pageTitle = currentPage > 0 ? `${category} - Page ${currentPage}` : `${category}`;
  const canonicalUrl = url + "/category/" + category + "/";
  return (
    <Layout pageTitle={pageTitle} description={siteSubtitle} url={canonicalUrl} featureImage={featureImage}>
      <Page title={category} containerCss={containerCss}>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMdx(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { category: { eq: $category }, template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            categorySlug
            slug
          }
          frontmatter {
            date
            description
            category
            title
            featuredImage {
              alt
              src
              title
            }
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
