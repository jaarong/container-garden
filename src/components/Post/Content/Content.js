// @flow strict
import React from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx";
import type { Mdx } from '../types';

type Props = {
  body: Mdx,
  title: string,
  banner: string
};

const Content = ({ body, title, banner }: Props) => (
  <div className="">
    <img class="my-6" src={banner} />
    <h1 className="text-5xl pb-6">{title}</h1>
    <div className="markdown"><MDXRenderer>{body}</MDXRenderer></div>
  </div>
);

export default Content;
