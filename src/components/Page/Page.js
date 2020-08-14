import React, { useRef, useEffect } from 'react';

type Props = {
  title?: string,
  children: React.Node
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className="m-3 max-w-screen-md mx-auto">
      <div className="container mx-auto p-6 max-w-screen-md">
        { title && <h1 className="text-3xl">{title}</h1>}
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;