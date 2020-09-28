// @flow strict
import React from 'react';
import type { Edges } from '../../types';
import Card from "../Card";

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className="container mx-auto p-6 max-w-screen-lg">
    <div class="grid grid-cols-2 gap-2">
      {edges.map((edge) => (
        <Card content={edge.node} />
      ))}
    </div>
  </div>
);

export default Feed;