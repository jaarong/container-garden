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
  featureImage: string,
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
            url: featureImage,
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
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
