// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import Footer from "../Footer";
import Header from "../Header";
import { withPrefix } from 'gatsby';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage? :string,
  cssLayout? :string
};

const Layout = ({
  children,
  title,
  description,
  socialImage, 
  cssLayout
}: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = url + withPrefix(metaImage);

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
      </Helmet>
      <div className="bg-charcoal text-gray-100">
        <Header />
        <div className={cssLayout}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
