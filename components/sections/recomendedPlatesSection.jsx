import React from "react";
import ItemBox from "../atoms/itemBox";

const RecomendedPlatesSection = (props) => {
  const { items } = props;

  return (
    <div id="recomended" className="xl:w-11/12 mt-20 self-center p-2">
      <div className="self-center text-white font-viking text-center text-3xl text-orange-600 xl:mb-10 mb-5"> RECOMENDADOS </div>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-cover bg-center shadow-2xl rounded-3xl"
            style={{
              backgroundImage: `url(${item.data.plato_imagen.url})`,
            }}
          >
            {console.log(item)}
            <ItemBox element={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendedPlatesSection;