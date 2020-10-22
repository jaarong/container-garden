// @flow strict
import React from 'react';
import type { Edges } from '../../types';
import Card from "../Card";

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className="container mx-auto p-6 max-w-screen-xl flex flex-row">
      {edges.map((edge) => (
        <Card content={edge.node} />
      ))}
  </div>
);

export default Feed;