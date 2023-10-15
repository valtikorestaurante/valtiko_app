import React from "react";


const ItemBox = props => {
  const { element } = props

  return (
        <div className="box-border h-32 border-4 text-white font-viking">
            {element.data.plato_titulo}
        </div>
        );
}

export default ItemBox;