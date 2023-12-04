import React from "react";
import CocktailBox from "../atoms/cocktailBox";
import Link from 'next/link';

const RecomendedCocktailsSection = (props) => {
  const { items } = props;

  return (
    <div id="recomended-cocktails" className=" mt-20 self-center p-2 -mt-10 pr-5 pl-5">
      <div className="self-center text-white font-viking text-center text-3xl text-orange-600 xl:mb-10 mb-5"> COCKTAILS RECOMENDADOS </div>
      <div className="grid grid-cols-2 gap-4 mb-20">
        {items.map((item, index) => {
          return (
                <CocktailBox element={item} key={item.id}/>
          );
        })}
      </div>
    </div>
  );
};

export default RecomendedCocktailsSection;