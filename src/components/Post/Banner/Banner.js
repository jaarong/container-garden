import React from "react" 

type Props = {
  title: string,
  featureImage: string
};

const Banner = ({ title, featureImage }: Props) => (

  <div className="bg-local bg-cover bg-no-repeat w-full h-full max-w-screen-lg mx-auto min-h-3/4 flex items-center justify-right" style={{backgroundImage: 'url('+featureImage+')'}} >
    <div className="container sm:w-full md:w-3/5 ml-auto text-right sm:pr-3 md:pr-5 bg-opacity-50 bg-black">
      <h1 className="text-5xl text-gray-20">{title}</h1>
    </div>
  </div>

)

export default Banner;