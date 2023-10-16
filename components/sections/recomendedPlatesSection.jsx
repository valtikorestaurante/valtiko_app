import React from "react";
import ItemBox from "../atoms/itemBox";
import Link from 'next/link';

const RecomendedPlatesSection = (props) => {
  const { items } = props;
  
  return (
    <div id="recomended-plates" className="xl:w-11/12 mt-20 self-center p-2">
      <div className="self-center text-white font-viking text-center text-3xl text-orange-600 xl:mb-10 mb-5"> PLATOS RECOMENDADOS </div>
      <div className="grid grid-cols-2 gap-4 mb-20">
        {items.map((item, index) => {
          return (
                <ItemBox element={item} key={item.id}/>
          );
        })}
      </div>
    </div>
  );
};

export default RecomendedPlatesSection;