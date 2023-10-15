import React from "react";


const Footer = props => {

  const { backgroundUrl, topText, bottomText, sloganText} = props

  return (
      <div id="footer" className=" xl:w-11/12 bg-cover bg-center shadow-2xl rounded-3xl  w-full h-full" style={{ backgroundImage: `url(${backgroundUrl}`}}>
        <div className=" bg-gradient-to-r from-black rounded-3xl">
            Cali - Colombia Direccion: Calle 9na # 23 - 21 | Developed by Gluonico
        </div>
      </div>
        );
}

export default Footer;