// @flow strict
import React from 'react';

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title }: Props) => (
  <div className="">
    <h1 className="text-3xl">{title}</h1>
    <div className="markdown" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
