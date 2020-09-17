// @flow strict
import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import Footer from "../Footer";
import Header from "../Header";
//import { withPrefix } from 'gatsby';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';

type Props = {
  children: ReactNode,
  pageTitle: string,
  description: string,
  featureImage: Object,
  url: string,

};

const Layout = ({
  children,
  pageTitle,
  description,
  featureImage,
  url, 
}: Props) => {
  const { title: siteTitle } = useSiteMetadata();
  console.log(featureImage);
  //Not needed since hosting media on cloudinary
  //const metaImageUrl = url + withPrefix(metaImage);


  return (
    <div>
      <GatsbySeo
      title={`${pageTitle} - ${siteTitle}`}
      description={description}
      canonical={url}
      openGraph={{
        url: url,
        title:`${pageTitle} - ${siteTitle}`,
        description: description,
        images: [
          {
            url: featureImage.src,
            width: 800,
            height: 600,
            alt: featureImage.alt,
          }
        ],
        site_name: siteTitle,
      }}
    />
      <div className="bg-charcoal text-gray-100 min-h-screen relative">
        <Header />
        <div className="pb-16">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
