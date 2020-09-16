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
  title: string,
  description?: string,
  socialImage? :string,
};

const Layout = ({
  children,
  pageTitle,
  description,
  socialImage, 
}: Props) => {
  const { title: siteTitle, url: url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  //Not needed since hosting media on cloudinary
  //const metaImageUrl = url + withPrefix(metaImage);


  return (
    <div>
      <GatsbySeo
      title={`${pageTitle} - ${siteTitle}`}
      description={description}
      canonical={url}
      openGraph={{
        url: {url},
        title:`${pageTitle} - ${siteTitle}`,
        description: {description},
        images: [
          {
            url: {metaImage},
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
        site_name: {siteTitle},
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
