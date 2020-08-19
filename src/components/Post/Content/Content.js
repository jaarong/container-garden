// @flow strict
import React from 'react';

type Props = {
  body: string,
  title: string,
  banner: string
};

const Content = ({ body, title, banner }: Props) => (
  <div className="">
    <img class="my-6" src={banner} />
    <h1 className="text-5xl">{title}</h1>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
