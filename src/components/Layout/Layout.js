// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
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
  title,
  description,
  socialImage, 
}: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  //Not needed since hosting media on cloudinary
  //const metaImageUrl = url + withPrefix(metaImage);


  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImage} />
      </Helmet>
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
