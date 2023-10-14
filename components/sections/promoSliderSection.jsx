import React from "react";


const HomeSection = props => {

  const { backgroundUrl, topText, bottomText, sloganText} = props

  return (
      <div id="home" className=" xl:w-11/12 xl:translate-x-20 bg-cover bg-center shadow-2xl rounded-3xl xl:mt-30 mt-20 h-full" style={{ backgroundImage: `url(${backgroundUrl}`}}>
        <div className=" bg-gradient-to-r from-black rounded-3xl">
          <div className="flex flex-col w-full text-white xl:justify-center pt-10 pb-20 h-full">
              <div className="padding font-trebuchet-bold-italic">
                  {sloganText}
              </div>
              <div className="padding xl:w-1/2 xl:text-6xl text-4xl sfont-bold font-lato-black">
                  {topText}
              </div>
              <div className="pr-5 pl-5 h-12 padding h-full">
                <div className="-translate-y-1 font-lato-black">
                  {bottomText}
                </div>
              </div>
          </div>
        </div>
      </div>
        );
}

export default HomeSection;